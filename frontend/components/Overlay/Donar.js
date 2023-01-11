import { useState, useRef, useEffect } from 'react';
import { ethers } from 'ethers';
import classes from '@styles/Donar.module.css';
// PayPal
import paypalOptions from '@utils/paypal-config';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
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
import PayPalButton from '../Layout/PayPalButton';

const wei = matic => ethers.utils.parseEther(matic).toString(),
    admin = process.env.NEXT_PUBLIC_CONTRACT_ADMIN.toLowerCase();

export default function Donar() {
    const montoInicial = '0.01',
        montoPaypalInicial = '1.00',
        montoRef = useRef(montoInicial),
        montoPaypalRef = useRef(montoPaypalInicial),
        [monto, setMonto] = useState(montoInicial),
        [montoPaypal, setMontoPaypal] = useState(montoPaypalInicial),
        [espera, setEspera] = useState(false),
        [hash, setHash] = useState(false),
        [currentAddress, setCurrentAddress] = useState(),
        handleMonto = e => {
            setMonto(e.target.value);
        },
        handleMontoPaypal = e => {
            setMontoPaypal(e.target.value);
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
                        <Input
                            ref={montoPaypalRef}
                            id='monto-donacion-paypal'
                            type='number'
                            label='Monto de donación (PESOS)'
                            value={montoPaypal}
                            min={montoPaypalInicial}
                            step={montoPaypalInicial}
                            required={true}
                            onChange={handleMontoPaypal}
                        />
                        <PayPalButton
                            currency={paypalOptions.currency}
                            showSpinner={false}
                            amount={montoPaypal}
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
                        label='Monto de donación (MATIC)'
                        value={monto}
                        min={montoInicial}
                        step={montoInicial}
                        required={true}
                        onChange={handleMonto}
                    />
                    <Button onClick={handleDonar} disabled={espera}>
                        {espera ? 'Espera...' : 'Donar'}
                    </Button>
                    {currentAddress === admin ? (
                        <Button onClick={handleRetirar}>
                            {espera ? 'Espera...' : `Retirar`}
                        </Button>
                    ) : null}
                    {hash && !espera ? (
                        <div className={classes.donacion}>
                            <p className={classes.mensaje}>¡Gracias!</p>
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
