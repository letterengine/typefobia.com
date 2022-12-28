import { useRef } from 'react';
// Components
import Backdrop from '@components/Overlay/Backdrop';
import Modal from '@components/Overlay/Modal';
import Input from '@components/UI/Input';

export default function Donar() {
    const montoRef = useRef();
    return (
        <>
            <Backdrop />
            <Modal header='Donar'>
                <Input
                    key='monto-donacion'
                    ref={montoRef}
                    id='monto-donacion'
                    type='number'
                    placeholder='$0.00'
                    label='Monto'
                    required={true}
                />
            </Modal>
        </>
    );
}
