import React from "react";
import "../styles/components/content.scss";

import About from "./About";
import Passion from "./Passion";
import Experience from "./Experience";

const Content = (props) => {
  return (
    <div className='content-container'>
      <About aboutRef={props.aboutRef}/>
      <Passion passionRef={props.passionRef}/>
      <Experience xpRef={props.xpRef}/>
    </div>
  );
};

export default Content;
