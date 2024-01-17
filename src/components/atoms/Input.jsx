import React from "react";
import { StyledInput } from "../../styles/styles";

const Input = ({ type, name, id, value, readOnly, onChange }) => (
  <StyledInput
    type={type}
    name={name}
    id={id}
    value={value}
    readOnly={readOnly}
    onChange={onChange}
    className="input"
  />
);

export default Input;
