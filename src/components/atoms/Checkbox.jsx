import React from "react";
import { StyledCheckbox, StyledSpan } from "../../styles/styles";

const CheckboxInput = ({ name, label }) => {
  return (
    <StyledCheckbox>
      <span>{label}</span>
      <input type="checkbox" name={name} />
      <StyledSpan></StyledSpan>
    </StyledCheckbox>
  );
};

export default CheckboxInput;
