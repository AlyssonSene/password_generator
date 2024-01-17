import React from "react";

const Tooltip = ({ children, show, className }) =>
  show ? <span className={`tooltip fade ${className}`}>{children}</span> : null;

export default Tooltip;
