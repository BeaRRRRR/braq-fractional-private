import { useEffect, useState } from "react";

export default function useGetAddressBalance() {
  const [balance, setBalance] = useState(null);

  async function fetchBalance() {
    const resp = await fetch(`https://api.etherscan.io/api?module=account&action=balance&address=${process.env.NEXT_PUBLIC_ETHERSCAN_ADDRESS}&tag=latest&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY}`);
    const json = await resp.json();
    setBalance(json.result);
  }

  useEffect(() => {
    fetchBalance();
  }, [])

  return balance;
}
