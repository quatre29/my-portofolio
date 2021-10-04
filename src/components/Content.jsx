import React from "react";
import "../styles/components/content.scss";

import About from "./About";
import Passion from "./Passion";

const Content = (props) => {
  return (
    <div className='content-container'>
      <About aboutRef={props.aboutRef}/>
      <Passion />
    </div>
  );
};

export default Content;
