import '../styles/styles.scss';

import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

import { SessionProvider } from 'next-auth/react';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const { publicClient, webSocketPublicClient } = configureChains([mainnet], [publicProvider()]);

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector(),
    new WalletConnectConnector({
      options: { projectId: "9890e33f1738c36147df0d081f9fe80a", showQrModal: true },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;
