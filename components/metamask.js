import AppContext from '@/components/AppContext';
import React from 'react';
import { useContext } from 'react';

export default function Metamask() {
  const { account, connectWallet, error } = useContext(AppContext);

  return (
    <>
      {account ? (
        <div className="account-box">
          <p className="shadow-border">{account}</p>
        </div>
      ) : (
        <button className="btn shadow-border" onClick={connectWallet}>
          Connect
        </button>
      )}
      {error && <p className={`error shadow-border`}>{`Error: ${error}`}</p>}
    </>
  );
}
