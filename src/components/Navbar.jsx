import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/components/navbar.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Adrian <i class='fas fa-rocket' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/portofolio'
              onClick={closeMobileMenu}
            >
              Portofolio
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/about' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/contact' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
