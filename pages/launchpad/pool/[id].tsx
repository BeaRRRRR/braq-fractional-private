import 'react-sliding-pane/dist/react-sliding-pane.css';

import { Button, Col, Container, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import React, { Component, useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import {
  useAccount,
  useConnect,
  useContractWrite,
  useDisconnect,
  usePrepareContractWrite,
  useSignMessage,
} from 'wagmi';

import { BsArrowLeft } from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { abi } from '@/mock/abi';
import { parseEther } from 'viem';
import { pools } from '@/mock/pools';
import { useAuthRequestChallengeEvm } from '@moralisweb3/next';
import { useRouter } from 'next/router';
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const connectors = {
  metamask: new MetaMaskConnector(),
  walletconnect: new WalletConnectConnector({
      options: { projectId: "9890e33f1738c36147df0d081f9fe80a", showQrModal: true },
    }),
}

export default function LaunchpadItem() {
  const ethToBraq = 16_666;

  const [ethValue, setEthValue] = useState(0.25);
  const [braqValue, setBraqValue] = useState(0.25 * ethToBraq);
  const router = useRouter();
  const { address, connector, isConnected } = useAccount();
  const { status } = useSession();

  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();

  async function handleSmartContract(provider: 'metamask' | 'walletconnect') {
    await handleAuth(provider);
    write();
  }

  const handleAuth = async (provider: 'metamask' | 'walletconnect') => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: connectors[provider] 
    });

    if (status === 'authenticated') return;

    const { message } = await requestChallengeAsync({
      address: account,
      chainId: chain.id,
    });

    const signature = await signMessageAsync({ message });

    await signIn('moralis-auth', {
      message,
      signature,
      redirect: false,
    });
  };

  const { id, image, progress, hardcap, amount, price, inProgress } = pools[0];

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: '0xEC5A0b7ce4608335aF82d18dE3166324EEfD9634' as never,
    abi: abi.abi as never,
    functionName: 'publicSale' as never,
    value: parseEther(`${ethValue}`) as never,
    onSuccess(data) {
      alert(`Successful! Hash: ${data.hash}`);
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const eth = e.target.value as unknown as number;
    setEthValue(eth);
    setBraqValue(eth * ethToBraq);
  };

  return (
    <>
      <div className="appWrapper">
        <Container fluid>
          <Row className="pageHeaderLaunchpad" style={{ backgroundColor: '#1E184C' }}>
            <Col></Col>
            <Col className="textRightLaunchpad">
              {/* {account ? (
                <div className="account-box">
                  <p className="shadow-border">{account}</p>
                </div>
              ) : (
                <button className="btn shadow-border" onClick={connectWallet}>
                  Connect
                </button>
              )}
              {error && <p className={`error shadow-border`}>{`Error: ${error}`}</p>} */}
            </Col>
          </Row>

          <Row className="launchpoolContainer">
            <div onClick={() => router.back()} className="back-btn">
              <BsArrowLeft />
              <span>BACK</span>
            </div>

            <Container fluid>
              <Row>
                <Col md={4} className="left-block">
                  <div className="image-container">
                    <img
                      className="launchpoolImage"
                      src="/launchpad/pool/pool-image.png"
                      alt="Image"
                    />
                  </div>
                  <div className="left-bottom ">
                    <div style={{ height: '100%' }}>
                      <p style={{ paddingTop: '16px' }}>
                        BRAQ is a Web3 brand based out of Singapore in the space of Real World Asset
                        Tokenisation and Fractionalisation. As one of the early movers in the space,
                        they utilise blockchain and NFTs to make unique and niche asset classes more
                        accessible to retail investors, introduce fresh liquidity into markets and
                        improve transparency in asset ownership.
                      </p>
                      <p>
                        Holders of $BRAQ will be able to use the tokens to invest in fractional RWAs
                        on their decentralised marketplace while enjoying preferential fees, rebates
                        and rewards.
                      </p>
                    </div>
                    <div className="launchpadIcons">
                      <div style={{ paddingRight: '24px' }}>
                        <img src="/launchpad/pool/website.png" />
                        <span>
                          <a href="https://braq.io" target="_blank">
                            WEBSITE
                          </a>
                        </span>
                      </div>
                      <div>
                        <img src="/launchpad/pool/whitepaper.png" />
                        <span>
                          <a href="https://docs.braq.io" target="_blank">
                            WHITEPAPER
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={8} className="rightBlock">
                  <div className="topbar">
                    <span>IN PROGRESS</span>
                  </div>
                  <div className="mainContent">
                    <div className="first">
                      <div className="left">
                        <div className="iconContainer">
                          <img src="/launchpad/pool/hardcap.png"></img>
                          <div className="iconContainerText">
                            <span>HARD CAP</span>
                            <span className="bold">{hardcap} ETH</span>
                          </div>
                        </div>
                        <div className="iconContainer">
                          <img src="/launchpad/pool/amount.png"></img>
                          <div className="iconContainerText">
                            <span>AMOUNT FOR SALE</span>
                            <span className="bold">{amount} $BRAQ</span>
                          </div>
                        </div>
                        <div className="iconContainer">
                          <img src="/launchpad/pool/eth.png"></img>
                          <div className="iconContainerText">
                            <span>PRICE</span>
                            <span className="bold">{price} ETH</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="third">
                      <div className="top">
                        <span>AMOUNT USED:</span>
                        <div className="inpt">
                          <input
                            type="number"
                            className="numeric-input"
                            value={ethValue}
                            onChange={(e) => handleInputChange(e)}></input>
                          <span>ETH</span>
                        </div>
                      </div>
                      <div className="bottom">
                        <span>YOU PURCHASE:</span>
                        <div className="inpt">
                          <input className="braq" disabled={true} value={braqValue}></input>
                          <span>BRAQ</span>
                        </div>
                      </div>
                    </div>
                    <div className="second">
                      {/* <div className="left">
                        <span className="buyTokens">BUY TOKENS</span>
                        <span className="available">
                          <img src="/launchpad/pool/braqtoken.png"></img>
                          1,875,000 $BRAQ AVAILABLE
                        </span>
                      </div> */}
                      <div className="right">
<<<<<<< HEAD
                        <Button onClick={() => handleSmartContract()} className="gradient-button">
                          BUY TOKENS
                          <div className="shine"></div>
                        </Button>
=======
                        <button onClick={() => handleSmartContract('metamask')} className="gradient-button">
                          BUY TOKENS
                          <div className="shine"></div>
                        </button>
                        <button onClick={() => handleSmartContract('walletconnect')}>Buy with WalletConnect</button>
                        {isSuccess && <p>Transaction: {data}</p>}
                        {isLoading && <p>Loading...</p>}
>>>>>>> 3d7956703f1ae663a55ab955c1b67d07a6adf75b
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    </>
  );
}
