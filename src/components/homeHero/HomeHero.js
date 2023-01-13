import React from "react";
import "./HomeHero.css";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className="heroSection">
      <div className="heroContainer">
        <h1 className="heroHeading">Hey, I'm Joshua Alvarez</h1>
        <div className="heroInfo">
          <p>A full-stack dev who loves what he does</p>
          <Link
            to="/#projects"
            onClick={() => {
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            PROJECTS
          </Link>
        </div>
        <div className="heroSocials">
          <div className="heroSocial">
            <a
              href="https://www.linkedin.com/in/joshuaalvarez06"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="heroSocial">
            <a
              href="https://github.com/joshuaalvarez06"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-square"></i>
            </a>
          </div>
          <div className="heroSocial">
            <a href="mailto:joshuaialvarez06@gmail.com">
              <i className="fas fa-envelope-square"></i>
            </a>
          </div>
        </div>
        <div>
          <Link
            to="/#about"
            className="scrollDown"
            onClick={() => {
              document.getElementById("about").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <p>Scroll Down</p>
            <i className="fas fa-chevron-down downArrow"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
