import React from "react";
import { StyledCheckbox, StyledSpan } from "../../styles/styles";

const CheckboxInput = ({ name, label, checked, onChange }) => {
  return (
    <StyledCheckbox>
      <span>{label}</span>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <StyledSpan></StyledSpan>
    </StyledCheckbox>
  );
};

export default CheckboxInput;
