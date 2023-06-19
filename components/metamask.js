import React, { useEffect, useState } from 'react';

import AppContext from '@/components/AppContext';
import { Button } from 'react-bootstrap';
import { ethers } from 'ethers';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';

export default function Metamask() {
  const { push } = useRouter();

  const [loggedIn, setLoggedIn] = useState(false); // Track login status
  let address = '';
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
          setLoggedIn(true);
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

  if (context.userData.address) {
    let long_address = context.userData.address;
    address = `${long_address.slice(0, 4)}...${long_address.slice(-4)}`;
  }

  return (
    <>
      {loggedIn ? (
        <Button disabled>{address}</Button> // Display user's address
      ) : (
        <Button onClick={connectWalletHandler} className="connectButton" size="lg" variant="light">
          <img src="logo_metamask.png" />
        </Button>
      )}
    </>
  );
}
