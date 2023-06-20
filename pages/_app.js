import '../styles/styles.scss';

import { createContext, useState } from 'react';

import AppProvider from '../components/AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
