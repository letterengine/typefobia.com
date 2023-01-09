import conectarContrato from './conectarContrato';

export async function getCurrentAddress() {
    let currentAddress = false;
    const { ethereum } = window;
    if (ethereum) {
        currentAddress = ethereum.selectedAddress;
    } else {
        throw new Error('Hubo un problema con MetaMask');
    }
    return currentAddress.toLowerCase();
}

export async function donarCrypto(monto) {
    const donarTypefobia = await conectarContrato();
    let donar;
    try {
        donar = await donarTypefobia.donar({ value: monto, gasLimit: 900000 });
        console.log(`Donando ${monto} MATIC`);
        await donar.wait();
        console.log('Transacción exitosa', donar);
        return donar;
    } catch (err) {
        console.log(err);
        return 'Refresca la página e intenta de nuevo.';
    }
}

export async function retirarCrypto() {
    const donarTypefobia = await conectarContrato();
    let retirar;
    try {
        const fondos = await donarTypefobia.fondos();
        retirar = await donarTypefobia.retirarFondos(fondos.toString(), {
            gasLimit: 900000,
        });
        console.log(`Retirando ${fondos} MATIC`);
        await retirar.wait();
        console.log('Transacción exitosa', retirar);
        return retirar;
    } catch (err) {
        console.log(err);
        return 'Refresca la página e intenta de nuevo.';
    }
}
