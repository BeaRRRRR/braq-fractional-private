import { useEffect, useState } from "react";

export default function useGetAddressBalance() {
  const [balance, setBalance] = useState(null);

  async function fetchBalance() {
    const resp = await fetch('https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=DNDHGNS28CFMRNHYPGHUS3YTZZ73E4ZE79');
    const json = await resp.json();
    setBalance(json.result);
  }

  useEffect(() => {
    fetchBalance();
  }, [])

  return balance;
}
