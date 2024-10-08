import React from "react";

const SubTitle = ({ subTitle, children, ...props }) => {
  return (
    <h2 className="soustitre" style={{ backgroundColor: "red" }} {...props}>
      {children}
    </h2>
  );
};

export default SubTitle;
