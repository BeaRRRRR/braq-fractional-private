import '../styles/styles.scss';

import { useState, createContext } from 'react';
import AppContext from '@/components/AppContext';

const app = ({ Component, pageProps }) => {
  const [userData, setUserData] = useState({
    address: null,
    balance: null,
    system: null,
    itemCount: 0,
  });

  return (
    <AppContext.Provider value={{ userData, setUserData }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};

export default app;
