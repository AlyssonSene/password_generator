import React from "react";

const Tooltip = ({ children, show, className }) =>
  show ? <span className={`tooltip ${className}`}>{children}</span> : null;

export default Tooltip;
