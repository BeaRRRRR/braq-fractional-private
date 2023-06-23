import { BiChevronRightCircle } from 'react-icons/bi';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';
import { redirect } from 'next/navigation';
import useGetAddressBalance from '@/hooks/useGetAddressBalance';

export default function Pool({ id, image, progress, hardcap, amount, price, inProgress }) {
  const balance = (useGetAddressBalance() / 10 ** 18).toFixed(2);
  return (
    <Link
      href={`${
        isMobile ? `https://metamask.app.link/dapp/${process.env.NEXT_PUBLIC_APP_URL}` : ''
      }launchpad/pool/${id}`}>
      <div className="pool">
        <p>IS MOBILE: {isMobile}</p>
        <div className="pool-card">
          <img className="pool-image" src={image}></img>
          <div className="pool-info">
            <div className="pool-info__topbar">
              {inProgress ? (
                <div className="pool-info__progress">
                  <span className="in-progress">IN PROGRESS</span>
                  <span>({balance} / 200)</span>
                </div>
              ) : (
                <span>COMPLETED</span>
              )}
            </div>
            <div className="pool-info__main">
              <div className="pool-info__main-element">
                <img src="launchpad/pool/hardcap.png"></img>
                <div className="pool-info__main-element__right-info">
                  <span>HARD CAP</span>
                  <span className="bold">{hardcap} ETH</span>
                </div>
              </div>
              <div className="pool-info__main-element">
                <img src="launchpad/pool/amount.png"></img>
                <div className="pool-info__main-element__right-info">
                  <span>AMOUNT FOR SALE</span>
                  <span className="bold">{amount} $BRAQ</span>
                </div>
              </div>
              <div className="pool-info__main-element">
                <img src="launchpad/pool/eth.png"></img>
                <div className="pool-info__main-element__right-info">
                  <span>PRICE</span>
                  <span className="bold">{price} ETH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pool-footer">
          <div className="pool-footer__btn">
            {inProgress ? (
              <span>THIS POOL IS LIVE</span>
            ) : (
              <span>THIS POOL IS FINISHED SUCCESSFULLY</span>
            )}

            <BiChevronRightCircle />
          </div>
        </div>
      </div>
    </Link>
  );
}
