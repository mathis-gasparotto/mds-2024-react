import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
// import { Title, Paragraph } from "./components/atoms/Text";
import { Text } from "./components/atoms";
function App() {
  return (
    <div className="App">
      <Home message="Hello World"></Home>
      <Text.Title title="Mon super Titre"></Text.Title>
      <Text.Paragraph text="Bonjour a tous, regardez ce super texte"></Text.Paragraph>
      <Text.SubTitle subTitle="Bonjour a tous, regardez ce super sous-titre">
        <Text.Title title="Mon super deuxieme Titre"></Text.Title>
      </Text.SubTitle>
    </div>
  );
}

export default App;
