import { ModalContext } from '@store/modal-context';
import { useContext } from 'react';
// Components
import Donar from '@components/Overlay/Donar';
import MailChimp from '@components/Overlay/MailChimp';

export default function ModalConstructor() {
    const modalctx = useContext(ModalContext);
    switch (modalctx.currentModal) {
        case 'Donar':
            return <Donar />;
        case 'Newsletter':
            return <MailChimp />;
        default:
            return null;
    }
}
