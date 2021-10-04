import React from "react";
import "../styles/components/button.scss";

const STYLE = ["primary", "outline"];
const SIZES = ["medium", "large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <div
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children.toUpperCase()}
    </div>
  );
};

export default Button;
