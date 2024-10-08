import React, { useState } from "react";
import { Button, Container } from "../atoms";

const Menu = ({ configs, onMenuChange = (arg) => {} }) => {
  //   let lastClicked = "None";

  const [lastClicked, setLastClicked] = useState("None");
  return (
    <>
      <Container.Menu>
        {configs.map((config, i) => {
          return (
            <Button.Base
              onClick={() => {
                console.log(config.displayName);
                console.log(config.displayName);
                // lastClicked = config.displayName;
                onMenuChange(config.displayName);
                setLastClicked(config.displayName);
              }}
              key={i}
            >
              {config.displayName}
            </Button.Base>
          );
        })}
      </Container.Menu>
      {lastClicked}
      {}
    </>
  );
};

export default Menu;
