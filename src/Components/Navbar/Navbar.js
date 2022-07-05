import React, {useState} from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="navbar-container">
      <div className="nav">
        <div className="logo-container">
          <img src="/assets/logo.svg" />
          <p className="logo-title">hatom</p>
        </div>
        <button className={`toggle-button ${isMobileMenuOpen ? 'is-active' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className="toggle-button-line" />
          <div className="toggle-button-line" />
          <div className="toggle-button-line" />
        </button>
        <div className="menu-container">
          <a href={"#"} className="menu-item">
            Markets
          </a>
          <a href={"#"} className="menu-item">
            Governance
          </a>
          <a href={"#"} className="menu-item">
            Prices
          </a>
          <a href={"#"} className="menu-item">
            Docs
          </a>
          <a href={"#"} className="menu-item active-link">
            Hatom Token
          </a>
        </div>
        <button className="app-button">App</button>
      </div>
      <div className={`menu-container-mobile ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <a href={"#"} className="menu-item">
          Markets
        </a>
        <a href={"#"} className="menu-item">
          Governance
        </a>
        <a href={"#"} className="menu-item">
          Prices
        </a>
        <a href={"#"} className="menu-item">
          Docs
        </a>
        <a href={"#"} className="menu-item active-link">
          Hatom Token
        </a>
      </div>
      <div className="hattom-title-container">
        <p className="main-title">Hatom Token</p>
        <p className="sub-title">
          Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit.</span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
