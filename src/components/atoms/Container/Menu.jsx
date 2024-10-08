import React from "react";
import { Button } from "..";

const Menu = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {children}
    </div>
  );
};

export default Menu;
