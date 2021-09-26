import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/navbar.scss";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='links-wrapper'>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link' to='/portofolio'>
          Portofolio
        </Link>
        <Link className='link' to='/about'>
          About
        </Link>
        <Link className='link' to='/contact'>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
