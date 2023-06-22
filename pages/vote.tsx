import React, { Component, useState } from "react";
import Link from 'next/link'
import { Button, Container, Row, Col, Tab, Nav, Card, Badge, Form, ButtonGroup, ListGroup, ProgressBar } from 'react-bootstrap'
import { AiOutlineWallet, AiOutlineClose, AiOutlineClockCircle } from "react-icons/ai";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Head from '../components/Head';
import Header from '../components/Header'

export default function Home() {
  const [state, setState] = useState({
    isProposalOpen: false
  });
  return (
    <>
      <Head />
      <div className="appWrapper">
        <Container fluid>
          <Header />
          <Tab.Container id="left-tabs-example" defaultActiveKey="proposals">
            <Row className="proposalWrapper">
              <Col lg={{ span: 2, offset: 1}}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="proposals">Proposals</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="newProposal">New Proposals</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="proposals">
                    <Container>
                      <Row>
                        <Col>
                          <Card className="proposal" onClick={() => setState({ isProposalOpen: true })}>
                            <Card.Header>
                              <div>
                                <span className="profileIcon"><img src="/braq/1.png" width="35px"/></span>
                                0x6e....4dF0
                              </div>
                              <div>
                                <Badge pill bg="success">Active</Badge>
                              </div>
                            </Card.Header>
                            <Card.Body>
                              <Row>
                                <Col lg={10}>
                                  <Card.Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Card.Title>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Col>
                                <Col lg={2} className="textRight">
                                  <img src="/fractional/o_bg-04.png" width="95%" />
                                </Col>
                              </Row>
                              <div className="timestamp"><AiOutlineClockCircle /> Ends in 4 days</div>
                            </Card.Body>
                          </Card>
                          <Card className="proposal" onClick={() => setState({ isProposalOpen: true })}>
                            <Card.Header>
                              <div>
                                <span className="profileIcon"><img src="/braq/1.png" width="35px"/></span>
                                0x6e....4dF0
                              </div>
                              <div>
                                <Badge pill bg="success">Active</Badge>
                              </div>
                            </Card.Header>
                            <Card.Body>
                              <Row>
                                <Col lg={10}>
                                  <Card.Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Card.Title>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Col>
                                <Col lg={2} className="textRight">
                                  <img src="/fractional/o_bg-04.png" width="95%" />
                                </Col>
                              </Row>
                              <div className="timestamp"><AiOutlineClockCircle /> Ends in 4 days</div>
                            </Card.Body>
                          </Card>
                          <Card className="proposal" onClick={() => setState({ isProposalOpen: true })}>
                            <Card.Header>
                              <div>
                                <span className="profileIcon"><img src="/braq/1.png" width="35px"/></span>
                                0x6e....4dF0
                              </div>
                              <div>
                                <Badge pill bg="success" >Active</Badge>
                              </div>
                            </Card.Header>
                            <Card.Body>
                              <Row>
                                <Col lg={10}>
                                  <Card.Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Card.Title>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Col>
                                <Col lg={2} className="textRight">
                                  <img src="/fractional/o_bg-04.png" width="95%" />
                                </Col>
                              </Row>
                              <div className="timestamp"><AiOutlineClockCircle /> Ends in 4 days</div>
                            </Card.Body>
                          </Card>
                          <Card className="proposal" onClick={() => setState({ isProposalOpen: true })}>
                            <Card.Header>
                              <div>
                                <span className="profileIcon"><img src="/braq/1.png" width="35px"/></span>
                                0x6e....4dF0
                              </div>
                              <div>
                                <Badge pill bg="success">Active</Badge>
                              </div>
                            </Card.Header>
                            <Card.Body>
                              <Row>
                                <Col lg={10}>
                                  <Card.Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Card.Title>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Col>
                                <Col lg={2} className="textRight">
                                  <img src="/fractional/o_bg-04.png" width="95%" />
                                </Col>
                              </Row>
                              <div className="timestamp"><AiOutlineClockCircle /> Ends in 4 days</div>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="newProposal">
                    <div className="proposalForm">
                      <h1>New Proposal</h1>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Asset</Form.Label>
                        <Form.Select size="lg" aria-label="Default select example">
                          <option>Moonbirds x BRAQ #7316</option>
                          <option value="1">BRAQ x Otherdeed #68322</option>
                          <option value="2">BRAQ x MAYC #11562</option>
                          <option value="3">BRAQ x DOODLES #4982</option>
                          <option value="4">Moonbirds x BRAQ #7316</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder=""
                          style={{ height: '100px' }}
                        />
                      </Form.Group>
                      <Form.Group controlId="formFileLg" className="mb-3">
                        <Form.Label>Attach Images</Form.Label>
                        <Form.Control type="file" size="lg" />
                      </Form.Group>
                      <Button variant="secondary" size="lg">Submit Proposal</Button>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
        <SlidingPane
          className="proposalDetails"
          isOpen={state.isProposalOpen}
          from="right"
          width="60vw"
          onRequestClose={() => setState({ isProposalOpen: false })}
        >
          <div className="panelCloseBtn" onClick={() => setState({ isProposalOpen: false })}>
            <AiOutlineClose/>
          </div>
          <div className="slidingPaneContent">
            <div className="proposalOverview">
              <Container>
              <Row>
              <Col>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <div className="proposalSubheader">
                <div className="status">
                  <Badge pill bg="success">Active</Badge>
                  <div className="walletDetails">
                    by
                    <span className="profileIcon"><img src="/braq/1.png" width="35px"/></span>
                    0x6e....4dF0
                  </div>
                </div>
                <h4><Badge bg="warning">Moonbirds x BRAQ #7316</Badge></h4>

              </div>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Col>
              </Row>
              <Row>
              <Col lg={6}>
                <Card>
                  <Card.Header>Cast Your Vote</Card.Header>
                  <Card.Body>
                    <ButtonGroup vertical>
                      <Button variant="outline-secondary" className="btn-block">In Favor</Button>
                      <Button variant="outline-secondary" className="btn-block">Against</Button>
                      <Button variant="outline-secondary" className="btn-block">Abstain</Button>
                    </ButtonGroup>
                    <Button variant="primary" className="btn-block">Vote</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className="stretch">
                <Card>
                  <Card.Header>Current Results</Card.Header>
                  <Card.Body>
                    <div className="voteProgress">
                      <div className="label">
                        In Favor
                        <span className="voteCount">400 BRAQ 40%</span>
                      </div>
                      <ProgressBar variant="primary" now={40} />
                    </div>
                    <div className="voteProgress">
                      <div className="label">
                        Abstain
                        <span className="voteCount">200 BRAQ 20%</span>
                      </div>
                      <ProgressBar variant="primary" now={20} />
                    </div>
                    <div className="voteProgress">
                      <div className="label">
                        Against
                        <span className="voteCount">200 BRAQ 20%</span>
                      </div>
                      <ProgressBar variant="primary" now={20} />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <Card.Header>Votes <Badge pill bg="secondary">200</Badge></Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col lg={4}>
                          <span className="profileIcon"><img src="/braq/1.png" width="35px"/></span>
                          0x6e....4dF0
                        </Col>
                        <Col lg={4} className="textCenter">
                          Abstain
                        </Col>
                        <Col lg={4} className="textRight">
                          200 Assets
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col lg={4}>
                          <span className="profileIcon"><img src="/braq/1.png" width="35px"/></span>
                          0x6e....4dF0
                        </Col>
                        <Col lg={4} className="textCenter">
                          Abstain
                        </Col>
                        <Col lg={4} className="textRight">
                          200 Assets
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col lg={4}>
                          <span className="profileIcon"><img src="/braq/1.png" width="35px"/></span>
                          0x6e....4dF0
                        </Col>
                        <Col lg={4} className="textCenter">
                          Abstain
                        </Col>
                        <Col lg={4} className="textRight">
                          200 Assets
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col lg={4}>
                          <span className="profileIcon"><img src="/braq/1.png" width="35px"/></span>
                          0x6e....4dF0
                        </Col>
                        <Col lg={4} className="textCenter">
                          Abstain
                        </Col>
                        <Col lg={4} className="textRight">
                          200 Assets
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              </Row>
              </Container>
            </div>
          </div>
        </SlidingPane>
      </div>
    </>
  )
}
