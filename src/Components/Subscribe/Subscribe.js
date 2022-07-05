import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <p className="subscribe-main-title">Subscribe to Hatom newsletter</p>
      <p className="subscribe-sub-title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort dignissim
        sit .
      </p>
      <div className="email-container">
        <input
          type={"text"}
          placeholder="Enter your email"
          className="custom-input"
        />
        <button className="subscribe-button desktop-btn">Subscribe</button>
      </div>
        <button className="subscribe-button mobile-btn">Subscribe</button>
    </div>
  );
};

export default Subscribe;
