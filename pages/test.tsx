import useMetamaskSdk from "@/hooks/useMetamaskSdk";

export default function Test() {
  const { checkIfWalletIsConnected, requestToken, isWalletConnected, currentAccount } = useMetamaskSdk(); 

  return (
    <div>
      <div className="box2 p-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center ">
        {!isWalletConnected ? (
          <button
            className="btn1 px-5 py-3 text-md text-slate-50 bg-blue-500 hover:bg-blue-600 font-semibold rounded-full"
            onClick={checkIfWalletIsConnected}
          >
            Connect Wallet
          </button>
        ) : (
          <p className="txt text-xl font-medium">
            Connected Wallet <br />{" "}
            <span className="text-xs">{currentAccount}</span>
          </p>
        )}
      </div>
      <button onClick={() => requestToken(0.25)}>BUY</button>
    </div>
  )
}
