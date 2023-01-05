import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient } from 'wagmi';
import { polygon, polygonMumbai } from 'wagmi/chains';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';

export const { chains, provider } = configureChains(
    [polygon, polygonMumbai],
    [infuraProvider({ apiKey: process.env.INFURA_KEY }), publicProvider()]
);

export const { connectors } = getDefaultWallets({
    appName: 'Typefobia',
    chains,
});

export const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});

export const typefobiaTheme = {
    accentColor: 'black',
    accentColorForeground: 'yellow',
    borderRadius: 'none',
    fontStack: 'system',
    overlayBlur: 'large',
};
