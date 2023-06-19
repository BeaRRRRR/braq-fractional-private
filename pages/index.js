import { Button, Col, Container, Row } from 'react-bootstrap';

import Head from '../components/head';
import Metamask from '@/components/metamask';

export default function Home() {
  return (
    <>
      <Head />
      <div className="appWrapper loginWrapper">
        <div className="loginForm">
          <div className="logo">
            <img src="logo_white.png" />
          </div>
          <p>Connect your wallet to manage your assets.</p>
          <div className="connectButtons">
            <Metamask />
          </div>
        </div>
      </div>
    </>
  );
}
