import { useEffect, useState } from "react";

export default function useGetAddressBalance() {
  const [balance, setBalance] = useState(null);

  async function fetchBalance() {
    const resp = await fetch('/api/etherscan/getBalance');
    const json = await resp.json();
    setBalance(json.result);
  }

  useEffect(() => {
    fetchBalance();
  }, [])

  return balance;
}
