import Link from 'next/link';
import { Button, Container, Row, Col, Dropdown, InputGroup, Form } from 'react-bootstrap';
import { AiOutlineMail } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { FaPencilAlt } from 'react-icons/fa';
import { RxDiscordLogo } from 'react-icons/rx';
import { VscDebugDisconnect } from 'react-icons/vsc';
import Head from '../components/head';
import Header from '../components/header';
import { useContext } from 'react';
import AppContext from '@/components/AppContext';

export default function Home() {
  return (
    <>
      <Head />
      <div className="appWrapper">
        <Container fluid>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col>
              <div className="profileWrapper">
                <div className="profileBanner"></div>
                <div className="profileAvatar">
                  {true && (
                    <div className="noAvatar">
                      <span>No Avatar Selected</span>
                      <div className="editAvatar">
                        <FaPencilAlt />
                      </div>
                    </div>
                  )}
                  {false && (
                    <div className="avatar">
                      <img src="/braq/1.png" />
                    </div>
                  )}
                </div>
                <h1>Profile</h1>
                <p>Connect your social media accounts.</p>
                <div className="profileForm">
                  {false && (
                    <Button className="btn-block" size="lg">
                      <FiTwitter /> Connect Twitter
                    </Button>
                  )}
                  {true && (
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        <FiTwitter />
                      </InputGroup.Text>
                      <Form.Control
                        size="lg"
                        placeholder="@MrsZeth"
                        aria-label="Twitter Handle"
                        aria-describedby="Twitter Handle"
                      />
                      <InputGroup.Text id="basic-addon1">
                        <span className="disconnectIcon">
                          <VscDebugDisconnect />
                        </span>
                      </InputGroup.Text>
                    </InputGroup>
                  )}
                  {false && (
                    <Button className="btn-block" size="lg">
                      <RxDiscordLogo /> Connect Discord
                    </Button>
                  )}
                  {true && (
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        <RxDiscordLogo />
                      </InputGroup.Text>
                      <Form.Control
                        size="lg"
                        placeholder="Mrs_Z#2750"
                        aria-label="Discord ID"
                        aria-describedby="Discord ID"
                      />
                      <InputGroup.Text id="basic-addon1">
                        <span className="disconnectIcon">
                          <VscDebugDisconnect />
                        </span>
                      </InputGroup.Text>
                    </InputGroup>
                  )}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <AiOutlineMail />
                    </InputGroup.Text>
                    <Form.Control
                      size="lg"
                      placeholder="Email Addresss"
                      aria-label="Email Address"
                      aria-describedby="Email Address"
                    />
                  </InputGroup>
                  <div className="textCenter">
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Add me to your newsletter and keep me updated."
                    />
                  </div>
                  <Button variant="secondary" size="lg">
                    Save
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
