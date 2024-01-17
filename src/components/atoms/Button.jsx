import React from "react";
import { StyledButton } from "../../styles/styles";

const Button = ({ children, onClick, className }) => (
  <StyledButton onClick={onClick} className={`button ${className}`}>
    {children}
  </StyledButton>
);

export default Button;
