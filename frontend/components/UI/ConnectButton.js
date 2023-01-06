import { ConnectButton as RainbowConnectButton } from '@rainbow-me/rainbowkit';
import classes from '@styles/Donar.module.css';
import Button from './Button';

export default function ConnectButton() {
    return (
        <RainbowConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');

                return (
                    <>
                        {(() => {
                            if (!connected) {
                                return (
                                    <Button
                                        onClick={openConnectModal}
                                        type='button'
                                    >
                                        Conectar Wallet
                                    </Button>
                                );
                            }

                            if (chain.unsupported) {
                                return (
                                    <Button
                                        onClick={openChainModal}
                                        type='button'
                                    >
                                        Red incorrecta
                                    </Button>
                                );
                            }

                            return (
                                <Button
                                    onClick={openAccountModal}
                                    type='button'
                                >
                                    {account.displayName}
                                </Button>
                            );
                        })()}
                    </>
                );
            }}
        </RainbowConnectButton.Custom>
    );
}
