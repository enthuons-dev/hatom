import React from "react";
import "./MainContent.css";

const MainContent = () => {
  return (
    <div className="main-content-container">
      <div className="main-content-sub-container">
        <div className="dividends-container">
          <p className="divindend-p title1">
            $9,449,627.26 <span>Dividends</span>
          </p>
          <p className="divindend-p title2">
            Paid out to Hatom Token Holders over 3 years
          </p>
        </div>
        <button className="buy-button">Buy Hatom Tokens</button>
      </div>
      <div className="features-container">
          <img src="/assets/light-coin.png" className="features-coin"/>
          <p className="features-title"><span>Features</span> of Hatom Protocol</p>
          <div className="features-sub-container light-image">
            <div className="earn-borrow-div">
                <div className="earn-div">
                    <p className="earn-title">Earn</p>
                    <p className="earn-sub-title desktop-earn-title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className="earn-sub-title desktop-earn-title">
                        tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                    <p className="earn-sub-title mobile-earn-title">
                        Stake your Hatom tokens to earn a share of the
                        protocol's revenue. Dividends are paid in EGLD,
                        USDC, MEX, HTM, and RIDE.
                    </p>
                </div>
                <div className="earn-div">
                    <p className="earn-title mobile-borrow-title"><span>Borrow</span></p>
                    <p className="earn-sub-title desktop-borrow-title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className="earn-sub-title mobile-vote-title">
                        Decide which token should be listed next,
                        and what upgrade or feature should be
                        integrated into the protocol.
                    </p>
                </div>
            </div>
            <div className="dividends-div">
                <p className="earn-title mobile-dividends-title"><span>Dividends</span></p>
                <p className="earn-sub-title desktop-supply-title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. tortor, dignissim sit amet.
                </p>
                <p className="earn-sub-title mobile-supply-title">
                    Hatom token holders can use the HTM Money Market to :
                </p>
                <ul className="dividends-ul">
                    <li className="earn-sub-title desktop-supply-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort, dignissim sit ametent.</li>
                    <li className="earn-sub-title mobile-supply-title supply-title">Supply HTM and earn interest on their deposit.</li>
                    <li className="earn-sub-title desktop-supply-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort dignissim sit amet.ectetur adip
                        from one ex-diivident date othe next</li>
                    <li className="earn-sub-title mobile-supply-title supply-title">Use HTM as collateral and take a loan of any available crypto asset.</li>
                </ul>
            </div>
          </div>
      </div>
    </div>
  );
};

export default MainContent;
