import React from "react";
import "../assets/css/style.css";
import "../assets/css/style-2.css";
import "../assets/css/index.css";
import web3pLogo from "../assets/images/web3plogo.png";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import youtube from "../assets/images/youtube.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt_20">
            <img className="web3p-logo" src={web3pLogo} alt="logo" />
            <p className="footer-description">
              Connect, Collaborate, & Conquer with
              <br />
              Web3Preneur, your gateway to exponential growth.
            </p>
          </div>
          <div className="col-md-2 col-sm-6 mt_20">
            <p className="quick_link_title">Company</p>
            <div className="quick_link">
              <a href="#">About Us</a>
              <a href="#">Career</a>
              <a href="#">Blog & News</a>
              <a href="#">FAQ</a>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 mt_20">
            <p className="quick_link_title">Company</p>
            <div className="quick_link">
              <a href="#">Terms of Services</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Help & Support</a>
              <a href="#">Copyright</a>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>Copyright © 2024 Web3Preneur. All rights reserved.</p>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="#">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
            <a href="#">
              <img src={youtube} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
