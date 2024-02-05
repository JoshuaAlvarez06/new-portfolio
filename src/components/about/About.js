import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init();

  const age = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    return currentMonth >= 2 ? currentYear - 2002 : currentYear - 2003;
  }, []);

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
              Welcome to my portfolio! I'm a {age}-year-old Full Stack Engineer
              with a track record of creating impactful applications and
              websites. My expertise spans both front-end and back-end
              development, and I take pride in delivering solutions that go
              beyond functionality to generate substantial revenue for
              companies. I've been part of several projects that have
              contributed to millions in revenue, showcasing not just technical
              skills but a keen understanding of business objectives.
            </p>
            <Link
              className="contactBtn"
              to="/#contact"
              onClick={() => {
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              CONTACT
            </Link>
          </div>
          <div className="aboutRight" data-aos="fade-left">
            <h3 className="contentHeading">Skills</h3>
            <div className="skills">
              {SKILLS.map((skill) => (
                <div className="skill" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SKILLS = [
  "React",
  "React Native",
  "Next.js",
  "JS / TS",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Email Dev.",
  "Solidity",
  "HTML",
  "CSS",
];

export default About;
