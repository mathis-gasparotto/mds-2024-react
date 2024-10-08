import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
// import { Title, Paragraph } from "./components/atoms/Text";
import { Text, Button, Container } from "./components/atoms";
import { Menu } from "./components/molecules";
function App() {
  const [toto, setToto] = useState("toto");
  return (
    <div className="App">
      <Menu
        onMenuChange={(arg) => {
          setToto(arg);
        }}
        configs={[
          { displayName: "Profile" },
          { displayName: "Home" },
          { displayName: "Contact" },
        ]}
      ></Menu>
      <Home message="Hello World"></Home>
      <Text.Title title="Mon super Titre"></Text.Title>
      <Text.Paragraph text="Bonjour a tous, regardez ce super texte"></Text.Paragraph>
      <Text.SubTitle>
        <Text.Paragraph text="Mon super deuxieme Titre"></Text.Paragraph>
      </Text.SubTitle>
      <Text.Paragraph>{toto}</Text.Paragraph>
    </div>
  );
}

export default App;
