import React from 'react';
import './NavMenu.css';
import { Link } from 'react-router-dom';

const NavMenu = ({ setVisible }) => {
  return (
    <div className="navMenuSection">
      <div className="navMenuContainer">
        <div className="menuList">
          <div className="listItemContainer" onClick={() => setVisible(false)}>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              HOME
            </Link>
          </div>
          <div className="listItemContainer" onClick={() => setVisible(false)}>
            <Link
              to="/#about"
              onClick={() => {
                document.getElementById('about').scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              ABOUT
            </Link>
          </div>
          <div className="listItemContainer" onClick={() => setVisible(false)}>
            <Link
              to="/#projects"
              onClick={() => {
                document.getElementById('projects').scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              PROJECTS
            </Link>
          </div>
          <div className="listItemContainer" onClick={() => setVisible(false)}>
            <Link
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
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
