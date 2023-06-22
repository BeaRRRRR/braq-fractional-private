import { useAccount, useConnect, useDisconnect, useSignMessage } from "wagmi";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { signIn } from "next-auth/react";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import { useRouter } from "next/router";

function SignIn() {
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
		

    // redirect user after success authentication to '/profile' page
    const { url } = await signIn("moralis-auth", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/profile",
    });
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url);
  };

  return (
    <div className="appWrapper loginWrapper">
      <div className="loginForm">
        <div className="logo">
          <img src="logo_white.png" />
        </div>
        <p>Connect your wallet to manage your assets.</p>
        <div className="connectButtons">
          <button className="btn shadow-border" onClick={handleAuth}>Authenticate via Metamask</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
