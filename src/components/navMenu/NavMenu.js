import React from 'react';
import './NavMenu.css';
import { Link } from 'react-router-dom';

const NavMenu = ({ setVisible }) => {
  return (
    <div className="navMenuSection">
      <div className="navMenuContainer">
        <div className="menuList">
          <div className="listItemContainer" onClick={() => setVisible(false)}>
            <Link to="/">HOME</Link>
          </div>
          <div className="listItemContainer" onClick={() => setVisible(false)}>
            <Link to="/#about">ABOUT</Link>
          </div>
          <div className="listItemContainer" onClick={() => setVisible(false)}>
            <Link to="/#projects">PROJECTS</Link>
          </div>
          <div className="listItemContainer" onClick={() => setVisible(false)}>
            <Link to="/#contact">CONTACT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
