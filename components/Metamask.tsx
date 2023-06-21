import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";

export default function Metamask() {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  const { push } = useRouter();

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const { message } = await requestChallengeAsync({
      address: account,
      chainId: chain.id,
    });

    const signature = await signMessageAsync({ message });

    // redirect user after success authentication to '/user' page
    const { url } = await signIn("moralis-auth", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/user",
    });
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url);
  };

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

