import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ visible, setVisible }) => {
  const clickHandler = () => setVisible(!visible);

  return (
    <header className="navSection">
      <div className="navContainer">
        <div className="logoContainer">
          <h1>
            <i className="fas fa-laptop-code fa-xs"></i>Joshua Alvarez
          </h1>
        </div>

        <div className="navMain">
          <div className="bars" onClick={clickHandler}>
            {!visible ? (
              <i className="fas fa-bars bars"></i>
            ) : (
              <i className="fas fa-times bars"></i>
            )}
          </div>
          <ul className="menuItems">
            <li className="menuItem">
              <Link to="/">Home</Link>
            </li>
            <li className="menuItem">
              <Link to="/#about">About</Link>
            </li>
            <li className="menuItem">
              <Link to="/#projects">Projects</Link>
            </li>
            <li className="menuItem">
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
