import { Button, Container, Row, Col } from 'react-bootstrap';
import Head from '../components/head';
import Metamask from '@/components/metamask';
import JoyID from '@/components/joyid';

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
            <JoyID />
          </div>
        </div>
      </div>
    </>
  );
}
