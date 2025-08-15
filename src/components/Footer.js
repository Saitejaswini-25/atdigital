import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-col footer-col--brand">
        <div className="footer-logo-row">
          <img src={logo} alt="at digital logo" className="footer-logo-img" />
        </div>
        <p className="footer-desc">
          Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
        </p>
      </div>
      <div className="footer-col-links">
        <div className="footer-col">
          <h4>Our Technologies</h4>
          <ul>
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="footer-divider" />
    <div className="footer-links">
      <span className="footer-link">Privacy Policy</span>
      <span className="footer-link-divider">|</span>
      <span className="footer-link">Terms & Conditions</span>
    </div>
  </footer>
);

export default Footer;
