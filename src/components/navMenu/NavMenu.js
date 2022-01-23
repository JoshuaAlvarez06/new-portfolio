import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = ({ visible, setVisible }) => {
  const closeMenu = () => setVisible(false);

  return (
    <nav className={`mobile-nav${visible ? ' visible' : ''}`}>
      <nav className="mobile-nav-menu">
        <div className="menu-list">
          <Link onClick={() => {
            window.scroll(0, 0);
            closeMenu();
          }} to="/" className="list-item">Home</Link>
          <Link onClick={() => {
            const about = document.getElementById('about');
            about.scrollIntoView({
              behavior: 'smooth',
            });
            closeMenu();
          }} to="/#about" className="list-item">About</Link>
          <Link onClick={() => {
            const projects = document.getElementById('projects');
            projects.scrollIntoView({
              behavior: 'smooth',
            });
            closeMenu();
          }} to="/#projects" className="list-item">Projects</Link>
          <Link onClick={() => {
            const contact = document.getElementById('contact');
            contact.scrollIntoView({
              behavior: 'smooth',
            });
            closeMenu();
          }} to="/#contact" className="list-item">Contact</Link>
        </div>
      </nav>
    </nav>
  );
};

export default NavMenu;
