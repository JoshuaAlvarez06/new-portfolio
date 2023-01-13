import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footerSection">
      <div className="footerContainer">
        <div className="footerLeft">
          <h2>JOSHUA ALVAREZ</h2>
          <p>A full-stack dev who loves what he does</p>
        </div>
        <div className="footerRight">
          <h2>SOCIALS</h2>
          <div className="footerSocials">
            <a
              href="https://www.linkedin.com/in/joshuaalvarez06"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.github.com/joshuaalvarez06"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-square"></i>
            </a>
            <a href="mailto:joshuaialvarez06@gmail.com">
              <i className="fas fa-envelope-square"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
