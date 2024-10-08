import React from "react";

const Base = ({ ...props }) => {
  return <div {...props} style={{ cursor: "pointer", padding: 15 }}></div>;
};

export default Base;
