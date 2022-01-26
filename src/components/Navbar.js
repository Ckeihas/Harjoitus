import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown.js';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
    
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Countries     
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to='/' className="nav-links">
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/countries"
              className="nav-links"
            >
              Countries <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          
        </ul>
      </nav>
    </>
  );
}

export default Navbar;