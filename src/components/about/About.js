import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  AOS.init();
  return (
    <section id="about" className="aboutSection">
      <div className="aboutContainer">
        <div className="aboutHeading">
          <h2>ABOUT ME</h2>
          <p>
            This is some basic information about me, more focused on the
            technological aspects of my life. Thanks for being here!
          </p>
        </div>
        <div className="aboutContent">
          <div className="aboutLeft" data-aos="fade-right">
            <h3 className="contentHeading">Get to know me</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              rem obcaecati earum molestias similique officiis temporibus
              delectus voluptatibus possimus fuga?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              rem obcaecati earum molestias similique officiis temporibus
              delectus voluptatibus possimus fuga?
            </p>
            <Link
              className="contactBtn"
              to="/#contact"
              onClick={() => {
                document.getElementById('contact').scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              CONTACT
            </Link>
          </div>
          <div className="aboutRight" data-aos="fade-left">
            <h3 className="contentHeading">Skills</h3>
            <div className="skills">
              <div className="skill">React</div>
              <div className="skill">JavaScript</div>
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">Git</div>
              <div className="skill">Node.js</div>
              <div className="skill">Express.js</div>
              <div className="skill">PostgreSQL</div>
              <div className="skill">Heroku</div>
              <div className="skill">TDD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
