import React from "react";
import "../styles/components/header.scss";

const Header = () => {
  return (
    <div className='header-container'>
      <video src='/assets/video/video.mp4' autoPlay loop muted />
      <h1>Full-Stack Web Developer</h1>
      <p>Hi, I'm Adrian and this is my website portofolio.</p>
    </div>
  );
};

export default Header;
