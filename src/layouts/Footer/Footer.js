import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo-white.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="footer-logo" src={Logo} alt="logo-footer"></img>
        <div className="footer-navigation">
          <p className="footer-title"> Doormat Navigation</p>
          <Link className="footer-item" to="/">Home</Link>
          <Link className="footer-item" to="/about">About</Link>
          <Link className="footer-item" to="/menu">Menu</Link>
          <Link className="footer-item" to="/reservations">Reservations</Link>
          <Link className="footer-item" to="/order-online">Order Online</Link>
          <Link className="footer-item" to="/login">Login</Link>
        </div>
        <div className="footer-contact">
          <p className="footer-title"> Contact</p>
          <p className="footer-item"> 123 New helvecia</p>
          <p className="footer-item"> 444-444-444</p>
          <p className="footer-item"> little.lemon@lemon.com</p>
        </div>
        <div className="footer-social">
          <p className="footer-title"> Social media links</p>
          <a className="footer-item" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a className="footer-item" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="footer-item" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;