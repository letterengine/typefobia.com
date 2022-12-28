import React, { useState } from 'react';

export const ModalContext = React.createContext({
    mounted: false,
    currentModal: '',
    mountHandler: () => {},
    setModal: () => {},
    resetModals: () => {},
});

export default function ModalContextProvider(props) {
    const [mounted, setMounted] = useState(false),
        [currentModal, setCurrentModal] = useState(''),
        setModal = current => {
            setCurrentModal(current);
        },
        resetModals = () => {
            setCurrentModal('');
            setMounted(false);
        };

    return (
        <ModalContext.Provider
            value={{
                mounted,
                currentModal,
                mountHandler: () => {
                    setMounted(prevMounted => !prevMounted);
                },
                setModal,
                resetModals,
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
