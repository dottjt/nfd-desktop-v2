import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="/" className="header__logo__wrapper">
        <h1 className="header__logo">NeverFap <span className="deluxe__font">Deluxe</span> <i className="em em-rainbow"></i></h1>
      </a>
      <div className="footer__designed">
        Made in Melbourne, Australia.
      </div>

      <ul className="footer__links">
        <Link className="footer__link__wrapper" to="/disclaimer"><li className="footer__link">Disclaimer</li></Link>
        <Link className="footer__link__wrapper" to="/privacy"><li className="footer__link">Privacy</li></Link>
        <Link className="footer__link__wrapper" to="/terms-and-conditions"><li className="footer__link">Terms & Conditions</li></Link>
      </ul>
    </footer>
  );
};

export default Footer;