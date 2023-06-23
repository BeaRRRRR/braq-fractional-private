import { useEffect, useState } from "react";
import { abi } from '@/mock/abi';
import { BrowserProvider, Contract, parseEther } from 'ethers';

export default function useMetamaskSdk() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [accountBalance, setAccountBalance] = useState("0");
  const [isOwner, setIsOwner] = useState(false);

  const [inputValue, setInputValue] = useState({
    mintTo: "",
    mintAmount: "",
    burnAmount: "",
    sendTo: "",
    sendAmount: "",
  });

  const contractAddress: string = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
  console.log(contractAddress)
  const contractABI = abi.abi;

  const checkIfWalletIsConnected = async () => {
  console.log(contractAddress)
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];

        setIsWalletConnected(true);
        setCurrentAccount(account);

        console.log("Connected Wallet:", account);
      } else {
        alert("Connect your Ethereum Wallet");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Amount - Ether value e.g 0.003
  const requestToken = async (amount: string) => {
    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const smartContract = new Contract(
        contractAddress,
        contractABI,
        signer
      );

      if (isWalletConnected) {
        const valueToSend = parseEther(amount); // Value to send in Ether
        const methodName = 'publicSale'; // Replace with your payable method name

        const transaction = await smartContract.connect(signer)[methodName]({
          value: valueToSend
        });

        const receipt = await transaction.wait();
        console.log('Transaction hash:', transaction.hash);
        console.log(receipt);
        return transaction;
      } else {
        alert("Connect your wallet first to request PAC tokens.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return { requestToken, checkIfWalletIsConnected, isWalletConnected, currentAccount }
}
