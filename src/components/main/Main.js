import React from 'react';
import './Main.css';
import HomeHero from '../homeHero/HomeHero';
import About from '../about/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

const Main = () => {
  return (
    <>
      <HomeHero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Main;
