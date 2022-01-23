import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  AOS.init();
  return (
    <section id='about' className='aboutSection'>
      <div className='aboutContainer'>
        <div className='aboutHeading'>
          <h2>ABOUT ME</h2>
          <p>
            This is some basic information about me, more focused on the
            technological aspects of my life. Thanks for being here!
          </p>
        </div>
        <div className='aboutContent'>
          <div className='aboutLeft' data-aos='fade-right'>
            <h3 className='contentHeading'>Get to know me</h3>
            <p>
              I have been around technology all my life, and I have grown to
              have a deep love for it. Since beginning to code, it has become my
              passion. I, now, focus on full-stack development. I am a very
              young, quick learner who is always looking to add more to my set
              of knowledge.
            </p>
            <p>
              As a 19 year old developer, I am excited to learn and add more to
              my skill set every single day to become the best developer I can
              be. Never stop learning!
            </p>
            <Link
              className='contactBtn'
              to='/#contact'
              onClick={() => {
                document.getElementById('contact').scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              CONTACT
            </Link>
          </div>
          <div className='aboutRight' data-aos='fade-left'>
            <h3 className='contentHeading'>Skills</h3>
            <div className='skills'>
              <div className='skill'>React</div>
              <div className='skill'>Next.js</div>
              <div className='skill'>JS / TS</div>
              <div className='skill'>HTML</div>
              <div className='skill'>CSS</div>
              <div className='skill'>Git</div>
              <div className='skill'>Node.js</div>
              <div className='skill'>Express.js</div>
              <div className='skill'>PostgreSQL</div>
              <div className='skill'>Email Dev.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
