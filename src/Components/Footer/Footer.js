import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main-container">
        <div className="footer-sub-container1">
          <div className="company-info-container">
            <div className="image-container"><img src="/assets/logo.svg" /></div>
            <div className="protocol-container pro-div">
              <p className="company-info-title">Protocol</p>
              <p className="company-info-subtitle">Markets</p>
              <p className="company-info-subtitle">Prices</p>
              <p className="company-info-subtitle">Docs</p>
            </div>
            <div className="protocol-container gov-div">
              <p className="company-info-title">Governance</p>
              <p className="company-info-subtitle">Overview</p>
              <p className="company-info-subtitle">Hatom token</p>
            </div>
            <div className="protocol-container">
              <p className="company-info-title">Security</p>
              <p className="company-info-subtitle">Audits</p>
              <p className="company-info-subtitle">Formal Verifications</p>
              <p className="company-info-subtitle">Economic Security</p>
              <p className="company-info-subtitle">Bug Bounty</p>
            </div>
            <button className="app-button">App</button>
          </div>
          <p className="copy-right desktop-copy-right">© 2022 Hatom ,LLC.</p>
          <div className="custom-br" />
        </div>
        <div className="footer-sub-container2">
          <div className="footer-sub-container3">
            <img src="/assets/ellipse.svg" />
            <p className="latest-block">Latest Block: 14296113</p>
          </div>
          <p className="copy-right mobile-copy-right">© 2022 Hatom ,LLC.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
