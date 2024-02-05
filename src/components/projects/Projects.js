import React from "react";
import "./Projects.css";
import { projects } from "../../data/projects";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  AOS.init();
  return (
    <section id="projects" className="projectsSection">
      <div className="projectsContainer">
        <div className="projectsHeading">
          <h2>PROJECTS</h2>
          <p>
            These are some of the projects I have created with links to both the
            GitHub repositories and live links.
          </p>
        </div>
        <div className="projects">
          {projects.map((proj, index) => (
            <div className="project" key={index} data-aos="zoom-in">
              <div className="projectLeft">
                <img src={proj.image} alt={proj.name} loading="lazy" />
              </div>
              <div className="projectRight">
                <h3 className="contentHeading">{proj.name}</h3>
                <p>{proj.description}</p>
                <div className="btnGroup">
                  <a
                    className="projectBtn btn"
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LIVE
                  </a>
                  {proj.repo && !proj.repoTwo && (
                    <a
                      className="projectBtn btn"
                      href={proj.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      REPO
                    </a>
                  )}

                  {proj.repo && proj.repoTwo && (
                    <>
                      <a
                        className="projectBtn btn"
                        href={proj.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="notHidden">REPO</span>{" "}
                        <span className="hidden">FRONT</span>
                      </a>
                      <a
                        className="projectBtn btn"
                        href={proj.repoTwo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="notHidden">REPO</span>{" "}
                        <span className="hidden">BACK</span>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
