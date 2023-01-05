import '@styles/reset.css';
import '@styles/fonts.css';
import '@styles/globals.css';
// Components
import ModalContextProvider from '@store/modal-context';
import ModalConductor from '@components/Overlay/ModalConstructor';
import AppContainer from '@components/Containers/AppContainer';
import Navbar from '@components/UI/Navbar';
import Footer from '@components/UI/Footer';
// Web3
import { wagmiClient, chains, typefobiaTheme } from '@utils/polygon-wallet';
import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';

export default function MyApp({ Component, pageProps }) {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
                chains={chains}
                modalSize='compact'
                theme={darkTheme(typefobiaTheme)}
            >
                <ModalContextProvider>
                    <AppContainer>
                        <Navbar />
                        <Component {...pageProps} />
                        <Footer />
                    </AppContainer>
                    <ModalConductor />
                </ModalContextProvider>
            </RainbowKitProvider>
        </WagmiConfig>
    );
}
