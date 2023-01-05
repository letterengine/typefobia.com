import { useRef } from 'react';
import classes from '@styles/Donar.module.css';
// PayPal
import paypalOptions from '@utils/paypal-config';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
// Components
import Backdrop from '@components/Overlay/Backdrop';
import Modal from '@components/Overlay/Modal';
import Input from '@components/UI/Input';
import ConnectButton from '@components/UI/ConnectButton';

export default function Donar() {
    const montoRef = useRef();
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
                    <Input
                        key='monto-donacion'
                        ref={montoRef}
                        id='monto-donacion'
                        type='number'
                        placeholder='0.00 MATIC'
                        label='Monto'
                        required={true}
                    />
                </div>
            </Modal>
        </>
    );
}
