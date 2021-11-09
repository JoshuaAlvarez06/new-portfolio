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
            <i className="fas fa-laptop-code fa-xs"></i>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              JOSHUA ALVAREZ
            </Link>
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
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                Home
              </Link>
            </li>
            <li className="menuItem">
              <Link
                to="/#about"
                onClick={() => {
                  document.getElementById('about').scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                About
              </Link>
            </li>
            <li className="menuItem">
              <Link
                to="/#projects"
                onClick={() => {
                  document.getElementById('projects').scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                Projects
              </Link>
            </li>
            <li className="menuItem">
              <Link
                to="/#contact"
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
