import 'react-sliding-pane/dist/react-sliding-pane.css';
import {} from 'react-icons/ai';

import { Button, Col, Container, Dropdown, Modal, Row } from 'react-bootstrap';
import React, { Component, useEffect, useState } from 'react';
import { connect, signTransaction } from '@joyid/evm';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import AppContext from '@/components/AppContext';
import { FaRegUserCircle } from 'react-icons/fa';
import Head from '../components/head';
import Header from '../components/header';
import Link from 'next/link';
import Metamask from '@/components/metamask';
import Pool from '@/components/pool';
import SlidingPane from 'react-sliding-pane';
import { parseEther } from 'ethers/lib/utils';
import { useContext } from 'react';

export default function Home() {
  const [state, setState] = useState({
    isPaneOpen: false,
  });

  const context = useContext(AppContext);

  const image = `launchpad/pool/pool-image.png`;

  console.log(context);
  return (
    <>
      <Head />
      <div className="appWrapper">
        <Container fluid>
          <Row className="pageHeaderLaunchpad" style={{ backgroundColor: '#1E184C' }}>
            <Col>
              {/* <Link
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
              </Link> */}
            </Col>
            <Col className="textRightLaunchpad">
              <Metamask />
            </Col>
          </Row>
          <Row className="imageContainer">
            <img src="launchpad\main1.png" className="img-fluid shadow-4 firstImage" alt="..." />
            <img src="launchpad/logo.png" className="img-fluid shadow-4 secondImage" />
          </Row>
          <Row className="launchpoolsContainer">
            <h2>LAUNCH POOLS</h2>
            <Pool
              image={image}
              progress={['150', '200']}
              hardcap={'200'}
              amount={'3.750.000'}
              price={'0.00006'}
              inProgress={true}
            />
            <Pool
              image={image}
              progress={['900.000', '900.000']}
              hardcap={'1000'}
              amount={'1.000.000.000'}
              price={'0.001'}
              inProgress={false}
            />
          </Row>
        </Container>
      </div>
    </>
  );
}
