import React from "react";
// import { StyledButton } from "../../styles/styles";

const Button = ({ children, onClick, className }) => (
  <button onClick={onClick} className={`button ${className}`}>
    {children}
  </button>
);

export default Button;
