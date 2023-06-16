import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { ethers } from 'ethers';
import { useRouter } from 'next/navigation';

import { useContext } from 'react';
import AppContext from '@/components/AppContext';

export default function Metamask() {
  const { push } = useRouter();

  const context = useContext(AppContext);

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum && defaultAccount == null) {
      // set ethers provider
      setProvider(new ethers.providers.Web3Provider(window.ethereum));

      // connect to metamask
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((result) => {
          setDefaultAccount(result[0]);

          push('/assets');
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else if (!window.ethereum) {
      alert('Your browser does not have MetaMask extension!');
    }
  };

  useEffect(() => {
    if (defaultAccount) {
      provider.getBalance(defaultAccount).then((balanceResult) => {
        setUserBalance(ethers.utils.formatEther(balanceResult));
      });
      context.setUserData((prevState) => ({
        ...prevState,
        address: defaultAccount,
        system: 'metamask',
      }));
    }
  }, [defaultAccount]);

  return (
    <Button onClick={connectWalletHandler} className="connectButton" size="lg" variant="light">
      <img src="logo_metamask.png" />
    </Button>
  );
}
