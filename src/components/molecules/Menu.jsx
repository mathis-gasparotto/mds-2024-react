import { Button, Container } from "../atoms";

const Menu = ({ configs, onMenuChange = (arg) => {} }) => {
  return (
    <Container.Menu>
      {configs.map((config, i) => {
        return (
          <Button.Base
            onClick={() => {
              onMenuChange(config.pageName);
            }}
            key={i}
          >
            {config.displayName}
          </Button.Base>
        );
      })}
    </Container.Menu>
  );
};

export default Menu;
