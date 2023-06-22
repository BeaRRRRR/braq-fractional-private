import { AiOutlinePoweroff, AiOutlineWallet } from 'react-icons/ai';
import { Button, Col, Container, Dropdown, Modal, Row } from 'react-bootstrap';
import { connect, signTransaction } from '@joyid/evm';

import { FaRegUserCircle } from 'react-icons/fa';
import Head from 'next/head';
import { parseEther } from 'ethers/lib/utils';
import { useState } from 'react';
import { useBoundStore } from '@/store/store';
import { useAccount } from "wagmi";
import Link from 'next/link';

export default function Header() {
  const { address } = useAccount();

  const itemCount = useBoundStore((store) => store.itemCount); 
  const [toAddress, setToAddress] = useState('0x6f9e2777D267FAe69b0C5A24a402D14DA1fBcaA1');
  const [amount, setAmount] = useState('0.01');
  const [modalShow, setModalShow] = useState(false);

  const onOpenModal = () => {
    setModalShow(true);
  };

  const onCloseModal = () => {
    setModalShow(false);
  };
	
  const onConnectAndSign = async () => {
    const data = await connect();
    const signedTx = await signTransaction({
      to: toAddress,
      from: data.ethAddress,
      value: parseEther(amount).toString(),
    }).catch((error) => null);
    console.log(`signedTx: ${signedTx}`);
  };

  return (
    <>
      <Modal show={modalShow} onHide={onCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <div className="itemContainer">
            <img src="/fractional/o_bg-04.png" width="30%" />
            <div className="aboutItem">
              <h5>Moonbirds x BRAQ #7316</h5>
              <h6>Price: 0.00795 ETH </h6>
            </div>
          </div>
          <div className="itemContainer">
            <img src="/fractional/o_bg-02.png" width="30%" />
            <div className="aboutItem">
              <h5>Bored Ape Yacht Club x BRAQ #1916</h5>
              <h6>Price: 8.295 ETH </h6>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              onCloseModal();
              onConnectAndSign();
            }}>
            Buy
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="pageHeader">
        <Col>
          <Link href="/assets">
            <img src="/logo_dark.png" width="120px" />
          </Link>
        </Col>
        <Col>
          <ul className="pageNav">
            <li className="">
              <Link href="/assets">Braq Assets</Link>
            </li>
            <li className="">
              <Link href="/fractional">Fractional Assets</Link>
            </li>
          </ul>
        </Col>
        <Col className="textRight">
          <Button
            onClick={onOpenModal}
            disabled={true}
            variant="primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <span>{itemCount}</span>
          </Button>
          <Button
            // onClick={onConnectAndSign}
            // disabled={context.userData.system === 'metamask'}
            variant="secondary"
            href="/launchpad">
            Buy
          </Button>

          {/* <Button variant="secondary" href="/vote">
            Vote now
          </Button> */}
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" drop="end">
              <AiOutlineWallet />
              {address?.slice(0, 4)}...{address?.slice(-4)}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link href="/profile">
                  <FaRegUserCircle /> Profile
                </Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <AiOutlinePoweroff /> Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </>
  );
}
