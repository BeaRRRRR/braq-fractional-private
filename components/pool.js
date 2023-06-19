import { BiChevronRightCircle } from 'react-icons/bi';

export default function Pool({ image, progress, hardcap, amount, price, inProgress }) {
  console.log(image);
  return (
    <div className="pool">
      <div className="pool-card">
        <img className="pool-image" src={image}></img>
        <div className="pool-info">
          <div className="pool-info__topbar">
            {inProgress ? (
              <span>IN PROGRESS</span>
            ) : (
              <span style={{ color: '#0BFD9D' }}>COMPLETED</span>
            )}
            <span>
              {progress[0]}/{progress[1]} ETH
            </span>
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
  );
}
