const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers'),
    { expect } = require('chai'),
    { ethers } = require('hardhat');

describe('Contrato DonacionTypefobia', function () {
    async function DesplegarDonacionTypefobia() {
        const [admin, donador] = await ethers.getSigners(),
            DonacionTypefobia = await ethers.getContractFactory(
                'DonacionTypefobia'
            ),
            hardhatDonacionTypefobia = await DonacionTypefobia.deploy();
        await hardhatDonacionTypefobia.deployed();
        return { DonacionTypefobia, hardhatDonacionTypefobia, admin, donador };
    }

    it('Revisión de donaciones', async function () {
        const { hardhatDonacionTypefobia, admin, donador } = await loadFixture(
            DesplegarDonacionTypefobia
        );
        // Revisar que admin es quien desplegó
        expect(await hardhatDonacionTypefobia.signer.getAddress()).to.equal(
            admin.address
        );
        // Donación de dos direcciones
        const donar1 = await hardhatDonacionTypefobia
                .connect(admin)
                .donar({ value: ethers.utils.parseEther('10') }),
            donar2 = await hardhatDonacionTypefobia
                .connect(donador)
                .donar({ value: ethers.utils.parseEther('10') });
        // Revisar que se emita el evento
        expect(donar1)
            .to.emit(hardhatDonacionTypefobia, 'Donacion')
            .withArgs(admin.address, ethers.utils.parseEther('10'));
        // Revisión de mapping de direcciones
        const donacion1 = await hardhatDonacionTypefobia.donaciones(0),
            donacion2 = await hardhatDonacionTypefobia.donaciones(1),
            donacion3 = await hardhatDonacionTypefobia.donaciones(2);
        expect(donar1.from).to.equal(donacion1.donador);
        expect(donar2.from).to.equal(donacion2.donador);
        // Buscar una transacción no existente
        expect(donacion3.donador).to.equal(
            '0x0000000000000000000000000000000000000000'
        );
        // Comparar total
        expect(await hardhatDonacionTypefobia.total()).to.equal(
            ethers.utils.parseEther('20')
        );
        // Donaciones menores a 0.01 MATIC
        try {
            await hardhatDonacionTypefobia
                .connect(admin)
                .donar({ value: ethers.utils.parseEther('0.005') });
        } catch (err) {
            expect(err.toString()).to.have.string(
                'Debe ser mayor a 0.01 MATIC'
            );
        }
    });

    it('Revisión de funciones de admin', async function () {
        const { hardhatDonacionTypefobia, admin, donador } = await loadFixture(
            DesplegarDonacionTypefobia
        );
        await hardhatDonacionTypefobia
            .connect(admin)
            .donar({ value: ethers.utils.parseEther('10') });
        // Revisar error de solo admin
        const adminError = 'Solo disponible para el administrador';
        try {
            await hardhatDonacionTypefobia
                .connect(donador)
                .retirarFondos(ethers.utils.parseEther('10'));
        } catch (err) {
            expect(err.toString()).to.have.string(adminError);
        }
        try {
            await hardhatDonacionTypefobia
                .connect(donador)
                .cambiarAdmin(donador.address);
        } catch (err) {
            expect(err.toString()).to.have.string(adminError);
        }
        // Cambiar de admin
        await hardhatDonacionTypefobia
            .connect(admin)
            .cambiarAdmin(donador.address);
        // Retiro de fondos por nuevo admin
        try {
            // Retirar más de los fondos del contrato
            await hardhatDonacionTypefobia
                .connect(donador)
                .retirarFondos(ethers.utils.parseEther('20'));
        } catch (err) {
            expect(err.toString()).to.have.string(
                'El monto es mayor al balance del contrato'
            );
        }
        // Dejar el contrato en 0
        await hardhatDonacionTypefobia
            .connect(donador)
            .retirarFondos(ethers.utils.parseEther('10'));
        const actualizado = await hardhatDonacionTypefobia.fondos();
        expect(actualizado.isZero()).to.be.true;
        // Revisar que el total coincida con todo lo que se ha donado
        // después de retirar los fondos
        const donado = await hardhatDonacionTypefobia.donaciones(0),
            total = await hardhatDonacionTypefobia.total();
        expect(donado.monto).to.equal(total);
    });
});
