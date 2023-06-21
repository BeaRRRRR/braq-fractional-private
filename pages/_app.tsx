import '../styles/styles.scss';

import { WagmiConfig, configureChains, createConfig } from 'wagmi';

import { MoralisProvider } from 'react-moralis';
import { SessionProvider } from 'next-auth/react';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { publicClient, webSocketPublicClient } = configureChains([mainnet], [publicProvider()]);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        {/* <AppProvider> */}
        <MoralisProvider serverUrl="https://localhost:3000" appId="YOUR_APP_ID">
          <Component {...pageProps} />
        </MoralisProvider>
        {/* </AppProvider> */}
      </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;
