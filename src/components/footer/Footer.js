import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footerSection">
      <div className="footerContainer">
        <div className="footerLeft">
          <h2>JOSHUA ALVAREZ</h2>
          <p>A full-stack web developer who loves what he does</p>
        </div>
        <div className="footerRight">
          <h2>SOCIALS</h2>
          <div className="footerSocials">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-github-square"></i>
            <i className="fas fa-envelope-square"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
