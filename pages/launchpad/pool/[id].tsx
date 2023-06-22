import 'react-sliding-pane/dist/react-sliding-pane.css';

import { Button, Col, Container, Dropdown, Modal, Row } from 'react-bootstrap';
import React, { Component, useEffect, useState } from 'react';
import { MetaMaskConnector } from "wagmi/connectors/metaMask";


import { useAccount, useConnect, useContractWrite, useDisconnect, usePrepareContractWrite, useSignMessage } from 'wagmi';


import { BsArrowLeft } from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';

import { useRouter } from 'next/router';
import {pools} from "@/mock/pools";

import {abi} from "@/mock/abi"
import { signIn, useSession } from 'next-auth/react';
import { useAuthRequestChallengeEvm } from '@moralisweb3/next';

export default function LaunchpadItem() {
  const router = useRouter();
  const { address, connector, isConnected } = useAccount();
  const { status } = useSession();
  console.log(isConnected, address)

  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();

  async function handleSmartContract() {
    await handleAuth();
    write()
  }

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    if(status === "authenticated") return;

    const { message } = await requestChallengeAsync({
      address: account,
      chainId: chain.id,
    });

    const signature = await signMessageAsync({ message });
		
    await signIn("moralis-auth", {
      message,
      signature,
      redirect: false,
    });
  };


  const { id, image, progress, hardcap, amount, price, inProgress } = pools[0];

  //TODO: fix and all normal typeings
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: '0xEC5A0b7ce4608335aF82d18dE3166324EEfD9634' as never,
    abi: abi.abi as never,
    functionName: 'publicSale' as never,
    onSuccess(data) {
      console.log(data);
    }
  });

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
                        <span>WEBSITE</span>
                      </div>
                      <div>
                        <img src="/launchpad/pool/whitepaper.png" />
                        <span>WHITEPAPER</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={8} className="rightBlock">
                  <div className="topbar">
                    <FiCheckCircle size={30} />
                    <span>COMPLETED</span>
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
                      <div className="right">
                        <button onClick={() => handleSmartContract()}>Buy</button>
                        {isLoading && <div>Check Wallet</div>}
                        {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
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
