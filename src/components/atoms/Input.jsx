import React from "react";

const Input = ({ type, name, id, value, readOnly, onChange }) => (
  <input
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
