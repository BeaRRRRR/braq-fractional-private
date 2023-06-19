import { AiOutlinePoweroff, AiOutlineWallet } from 'react-icons/ai';
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';

import { FaRegUserCircle } from 'react-icons/fa';
import Head from '../components/head';
import Header from '../components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head />
      <div className="appWrapper">
        <Container fluid>
          <Header />
          <Row className="braqAssets">
            <Col lg={3}>
              <div className="assetWrapper">
                <div className="assetImg">
                  <img src="/braq/1.png" width="100%" />
                </div>
                <div className="assetDetails">
                  <div className="assetName">BRAQFRNDS #2793</div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="assetWrapper">
                <div className="assetImg">
                  <img src="/braq/2.png" width="100%" />
                </div>
                <div className="assetDetails">
                  <div className="assetName">BRAQFRNDS #2158</div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="assetWrapper">
                <div className="assetImg">
                  <img src="/braq/3.png" width="100%" />
                </div>
                <div className="assetDetails">
                  <div className="assetName">BRAQFRNDS #2785</div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="assetWrapper">
                <div className="assetImg">
                  <img src="/braq/4.png" width="100%" />
                </div>
                <div className="assetDetails">
                  <div className="assetName">BRAQFRNDS #2079</div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="assetWrapper">
                <div className="assetImg">
                  <img src="/braq/5.png" width="100%" />
                </div>
                <div className="assetDetails">
                  <div className="assetName">BRAQFRNDS #2151</div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="assetWrapper">
                <div className="assetImg">
                  <img src="/braq/6.png" width="100%" />
                </div>
                <div className="assetDetails">
                  <div className="assetName">BRAQFRNDS #628</div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="assetWrapper">
                <div className="assetImg">
                  <img src="/braq/7.png" width="100%" />
                </div>
                <div className="assetDetails">
                  <div className="assetName">BRAQFRNDS #2237</div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="assetWrapper">
                <div className="assetImg">
                  <img src="/braq/8.png" width="100%" />
                </div>
                <div className="assetDetails">
                  <div className="assetName">BRAQFRNDS #2785</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
