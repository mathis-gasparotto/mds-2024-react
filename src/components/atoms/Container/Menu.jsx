import React from "react";

const Menu = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: 15,
        backgroundColor: "lightgray",
      }}
    >
      {children}
    </div>
  );
};

export default Menu;
