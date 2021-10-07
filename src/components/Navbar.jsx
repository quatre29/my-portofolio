import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/components/navbar.scss";

const Navbar = ({aboutScroll, passionScroll, xpScroll}) => {
  const [click, setClick] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [window])

  const handleScroll = () => {
    console.log(window.scrollY)

    if(window.scrollY > 20) {
      document.querySelector('.navbar').className = 'navbar scroll'
    } else {
      document.querySelector('.navbar').className = 'navbar'
    }
  }
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    
    setClick(false)
  };

  const goToAbout = () => {
    aboutScroll()
    setClick(false)
  }

  const goToPassions = () => {
    passionScroll()
    setClick(false)
  }

  const goToXp = () => {
    xpScroll()
    setClick(false)
  }

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Adrian <i className='fas fa-rocket' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* <li className='nav-item'>
            <Link
              className='nav-link'
              to='/portofolio'
              onClick={closeMobileMenu}
            >
              Portofolio
            </Link>
          </li>
          <li className='nav-item' onClick={closeMobileMenu}>
            <Link className='nav-link' >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/contact' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li> */}
          <li className='nav-item' onClick={goToAbout}>
              About
          </li>
          <li className='nav-item' onClick={goToPassions}>
              Passions
          </li>
          <li className='nav-item' onClick={goToXp}>
              Experience
          </li>
          <li className='nav-item' onClick={closeMobileMenu}>
              Portofolio
          </li>


          <li className='nav-item' onClick={closeMobileMenu}>
              Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
