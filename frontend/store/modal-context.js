import React, { useState } from 'react';

export const ModalContext = React.createContext({
    mounted: false,
    mountHandler: () => {},
});

export default function ModalContextProvider(props) {
    const [mounted, setMounted] = useState(false);
    return (
        <ModalContext.Provider
            value={{
                mounted: mounted,
                mountHandler: () => {
                    setMounted(prevMounted => !prevMounted);
                    console.log(mounted);
                },
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
