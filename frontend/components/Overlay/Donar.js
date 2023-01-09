import { useState, useRef, useEffect } from 'react';
import { ethers } from 'ethers';
import classes from '@styles/Donar.module.css';
// PayPal
import paypalOptions from '@utils/paypal-config';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
// Contrato
import {
    getCurrentAddress,
    donarCrypto,
    retirarCrypto,
} from '@contract/donacion-typefobia';
// Components
import Backdrop from '@components/Overlay/Backdrop';
import Modal from '@components/Overlay/Modal';
import Input from '@components/UI/Input';
import ConnectButton from '@components/UI/ConnectButton';
import Button from '@components/UI/Button';

const wei = matic => ethers.utils.parseEther(matic).toString(),
    admin = process.env.NEXT_PUBLIC_CONTRACT_ADMIN.toLowerCase();

export default function Donar() {
    const montoInicial = '0.01',
        montoRef = useRef(montoInicial),
        [monto, setMonto] = useState(montoInicial),
        [espera, setEspera] = useState(false),
        [hash, setHash] = useState(false),
        [currentAddress, setCurrentAddress] = useState(),
        handleMonto = e => {
            setMonto(e.target.value);
        },
        handleDonar = async e => {
            setEspera(true);
            const montoEnWei = wei(monto),
                donacion = await donarCrypto(montoEnWei);
            if (donacion?.hash) {
                setHash(donacion.hash);
            }
            setEspera(false);
        },
        handleRetirar = async e => {
            setEspera(true);
            const retiro = await retirarCrypto();
            if (retiro?.hash) {
                setHash(retiro.hash);
            }
            setEspera(false);
        };

    useEffect(() => {
        (async () => {
            const checkCurrentAddress = await getCurrentAddress();
            if (checkCurrentAddress) {
                setCurrentAddress(checkCurrentAddress);
            }
        })();
    }, []);

    return (
        <>
            <Backdrop />
            <Modal header='Donar'>
                <PayPalScriptProvider options={paypalOptions}>
                    <div className={classes.bloque}>
                        <h5>PayPal</h5>
                        <PayPalButtons
                            style={{
                                layout: 'horizontal',
                                color: 'black',
                                tagline: false,
                            }}
                        />
                    </div>
                </PayPalScriptProvider>
                <div className={classes.bloque}>
                    <h5>Crypto</h5>
                    <ConnectButton />
                    <a
                        href='https://academy.binance.com/es/articles/how-to-use-metamask'
                        target='blank'
                    >
                        Tutorial para usar Metamask
                    </a>
                    <Input
                        ref={montoRef}
                        id='monto-donacion'
                        type='number'
                        placeholder={`${montoInicial} MATIC`}
                        label='Monto de donación (MATIC)'
                        value={monto}
                        min={montoInicial}
                        step={montoInicial}
                        required={true}
                        onChange={handleMonto}
                    />
                    <Button onClick={handleDonar} disabled={espera}>
                        {espera ? 'Donando...' : 'Donar'}
                    </Button>
                    {currentAddress === admin ? (
                        <Button onClick={handleRetirar}>
                            {espera ? 'Retirando...' : `Retirar`}
                        </Button>
                    ) : null}
                    {hash && !espera ? (
                        <div className={classes.donacion}>
                            <p className={classes.mensaje}>
                                ¡Gracias por tu donación!
                            </p>
                            <a
                                href={`${process.env.NEXT_PUBLIC_BLOCK_EXPLORER}/tx/${hash}`}
                                target='blank'
                            >
                                Ver transacción en explorador.
                            </a>
                        </div>
                    ) : null}
                </div>
            </Modal>
        </>
    );
}
