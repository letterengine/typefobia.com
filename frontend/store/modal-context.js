import React, { useState } from 'react';

export const ModalContext = React.createContext({
    mounted: false,
    mountHandler: () => {},
    setModal: () => {},
});

export default function ModalContextProvider(props) {
    const [currentModal, setCurrentModal] = useState('');
    const setModal = current => {
        setCurrentModal(current);
        // console.log(currentModal);
    };

    const [mounted, setMounted] = useState(false);
    return (
        <ModalContext.Provider
            value={{
                mounted: mounted,
                mountHandler: () => {
                    setMounted(prevMounted => !prevMounted);
                    console.log(mounted);
                },
                setModal,
                currentModal,
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
