import React from "react";

const Range = ({ min, max, value, onChange, name, id }) => (
  <input
    type="range"
    name={name}
    id={id}
    min={min}
    max={max}
    value={value}
    onChange={onChange}
    className="range"
  />
);

export default Range;
