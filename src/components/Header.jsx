import React from "react";
import "../styles/components/header.scss";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  const contactMeClickHandler = () => {};
  const portofolioClickHandler = () => {};

  return (
    <div className='header-container'>
      <video src='/assets/video/video.mp4' autoPlay loop muted />
      <div className="header-text">

      <h1>Full-Stack Web Developer</h1>
      <p>Hi, I'm Adrian and this is my website portofolio.</p>
      </div>
      <div className='buttons-container'>
        <Link className='link' to='/contact'>
          <Button
            buttonStyle='primary'
            buttonSize='large'
            onClick={contactMeClickHandler}
          >
            Contact me
          </Button>
        </Link>
        <Link className='link' to='/portofolio'>
          <Button
            buttonStyle='outline'
            buttonSize='medium'
            onClick={portofolioClickHandler}
          >
            Portofolio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
