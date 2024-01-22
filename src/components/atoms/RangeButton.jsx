import React from "react";
import { StyledSlider } from "../../styles/styles";


const Range = ({ min, max, value, onChange, name, id }) => (
  <StyledSlider
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
