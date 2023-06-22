import 'react-sliding-pane/dist/react-sliding-pane.css';

import { AiOutlineClose, AiOutlineWallet } from 'react-icons/ai';
import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import React, { Component, useState } from 'react';

import AppContext from '@/components/AppContext';
import Head from '../components/Head';
import Header from '../components/Header';
import Link from 'next/link';
import SlidingPane from 'react-sliding-pane';
import { useContext } from 'react';
import { useBoundStore } from '@/store/store';

export default function Home() {
  const [state, setState] = useState({
    isPaneOpen: false,
  });

  const [isMonkey, setIsMonkey] = useState(false);
  const itemCount = useBoundStore((store) => store.itemCount);
  const setItemCount = useBoundStore((store) => store.setItemCount)

  const increaseItems = () => {
    setItemCount(itemCount + 1)
  };

  return (
    <>
      <Head />
      <div className="appWrapper">
        <Container fluid>
          <Header />
          <Row className="fractionalAssets">
            <Col lg={3}>
              <div className="assetWrapper">
                <div className="assetImg">
                  <img src="/fractional/o_bg-01.png" width="100%" />
                </div>
                <div className="assetDetails">
                  <div className="assetStatus">Sold Out</div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div
                className="assetWrapper"
                onClick={() => {
                  setState({ isPaneOpen: true });
                  setIsMonkey(true);
                }}>
                <div className="assetImg">
                  <img src="/fractional/o_bg-02.png" width="100%" />
                </div>
                <div className="assetDetails">
                  <div className="assetProgress">
                    Now Minting <span>1923/2000</span>
                    <ProgressBar striped variant="danger" now={95} />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="assetWrapper">
                <div className="assetImg">
                  <img src="/fractional/o_bg-03.png" width="100%" />
                </div>
                <div className="assetDetails">
                  <div className="assetStatus">Sold Out</div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div
                className="assetWrapper"
                onClick={() => {
                  setIsMonkey(false);
                  setState({ isPaneOpen: true });
                }}>
                <div className="assetImg">
                  <img src="/fractional/o_bg-04.png" width="100%" />
                </div>
                <div className="assetDetails">
                  <div className="assetProgress">
                    Now Minting <span>432/1000</span>
                    <ProgressBar striped variant="warning" now={60} />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="assetWrapper">
                <div className="assetImg">
                  <img src="/fractional/o_bg-05.png" width="100%" />
                </div>
                <div className="assetDetails">
                  <div className="assetStatus">Coming Soon</div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="assetWrapper">
                <div className="assetImg">
                  <img src="/fractional/o_bg-06.png" width="100%" />
                </div>
                <div className="assetDetails">
                  <div className="assetStatus">Coming Soon</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <SlidingPane
          className="fractionDetails"
          isOpen={state.isPaneOpen}
          from="right"
          width="40vw"
          onRequestClose={() => setState({ isPaneOpen: false })}>
          <div className="panelCloseBtn" onClick={() => setState({ isPaneOpen: false })}>
            <AiOutlineClose />
          </div>
          <div className="slidingPaneContent">
            {!isMonkey ? (
              <Container fluid>
                <Row className="justifyCenter">
                  <Col lg="12">
                    <img src="/fractional/o_bg-04.png" width="90%" />
                  </Col>
                  <Col lg="12" className="assetDetails">
                    <h1>Moonbirds x BRAQ #7316</h1>
                    <h3>Price: 0.00795 ETH </h3>
                    <div className="assetProgress">
                      <ProgressBar striped variant="warning" now={60} />
                      <span>432/1000</span>
                    </div>
                    <Button onClick={increaseItems} variant="secondary">
                      MINT NOW
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="assetSummary">
                      Moonbirds NFTs are a 10,000 piece collection of digital avatars, created by
                      artist and PROOF co-founder Justin Mezzell. They are distributed under a
                      creative commons (CC0) licence, meaning that any and every creative can use
                      the artwork to build their own collections and products.
                    </p>
                  </Col>
                </Row>
              </Container>
            ) : (
              <Container fluid>
                <Row className="justifyCenter">
                  <Col lg="12">
                    <img src="/fractional/o_bg-02.png" width="90%" />
                  </Col>
                  <Col lg="12" className="assetDetails">
                    <h1>Bored Ape Yacht Club x BRAQ #1916</h1>
                    <h3>Price: 8.295 ETH </h3>
                    <div className="assetProgress">
                      <ProgressBar striped variant="danger" now={95} />
                      <span>1923/2000</span>
                    </div>
                    <Button onClick={increaseItems} variant="secondary">
                      MINT NOW
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="assetSummary">
                      Mutant Ape Yacht Club's average price is 9,50 ETH (7D) with a sales volume of
                      11 500 ETH (7D). Mutant Ape Yacht Club is 2,28% for the last 7 days. The
                      latest floor price of Mutant Ape Yacht Club is 9,88 ETH with a total volume of
                      884.2K.
                    </p>
                  </Col>
                </Row>
              </Container>
            )}
          </div>
        </SlidingPane>
      </div>
    </>
  );
}
