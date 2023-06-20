import 'react-sliding-pane/dist/react-sliding-pane.css';
import {} from 'react-icons/ai';

import { Button, Col, Container, Dropdown, Modal, Row } from 'react-bootstrap';
import React, { Component, useEffect, useState } from 'react';
import { connect, signTransaction } from '@joyid/evm';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import AppContext from '@/components/AppContext';
import { FaRegUserCircle } from 'react-icons/fa';
import Head from '../../components/head';
import Header from '../../components/header';
import Link from 'next/link';
import Metamask from '@/components/metamask';
import Pool from '@/components/pool';
import SlidingPane from 'react-sliding-pane';
import { parseEther } from 'ethers/lib/utils';
import { pools } from '../../mock/pools';
import { useContext } from 'react';

export default function Launchpad() {
  const context = useContext(AppContext);

  return (
    <>
      <Head />
      <div className="appWrapper">
        <Container fluid>
          <Row className="pageHeaderLaunchpad" style={{ backgroundColor: '#1E184C' }}>
            {/* <Col>
              <Link
                href="/assets"
                style={{
                  color: 'white',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'baseline',
                }}>
                <AiOutlineArrowLeft style={{ marginRight: '10px' }} />
                <h5
                  style={{
                    color: 'white',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}>
                  Back to app
                </h5>
              </Link>
            </Col> */}
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
          <Row className="imageContainer">
            <img src="launchpad/main1.png" className="img-fluid shadow-4 firstImage" alt="..." />
            <img src="launchpad/logo.png" className="img-fluid shadow-4 secondImage" />
          </Row>
          <Row className="launchpoolsContainer">
            <h1>LAUNCH POOLS</h1>
            {pools.map((pool) => {
              return (
                <Pool
                  id={pool.id}
                  image={pool.image}
                  progress={pool.progress}
                  hardcap={pool.hardcap}
                  amount={pool.amount}
                  price={pool.price}
                  inProgress={pool.inProgress}
                />
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}