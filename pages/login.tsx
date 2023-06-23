import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { useRouter } from "next/router";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import useMetamaskSdk from "@/hooks/useMetamaskSdk";

const connectors = {
  metamask: new MetaMaskConnector(),
  walletconnect: new WalletConnectConnector({
      options: { projectId: "9890e33f1738c36147df0d081f9fe80a", showQrModal: true },
    }),
}

function SignIn() {
  const { checkIfWalletIsConnected, isWalletConnected } = useMetamaskSdk(); 
  const router = useRouter();

  if(isWalletConnected) router.push('/assets');

  return (
    <div className="appWrapper loginWrapper">
      <div className="loginForm">
        <div className="logo">
          <img src="logo_white.png" />
        </div>
        <p>Connect your wallet to manage your assets.</p>
        <div className="connectButtons">
          <button className="btn shadow-border" onClick={checkIfWalletIsConnected}>Authenticate via Metamask</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
