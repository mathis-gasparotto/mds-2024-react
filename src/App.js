import React, { useState } from "react";
import "./App.css";
import { Menu } from "./components/molecules";
import Profil from "./pages/Profil";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
function App() {
  const [currentRoute, setCurrentRoute] = useState("profil");
  const routes = {
    profil: <Profil />,
    home: <HomePage />,
    contact: <Contact />,
  };
  return (
    <div className="App">
      <Menu
        onMenuChange={(arg) => {
          setCurrentRoute(arg);
        }}
        configs={[
          { displayName: "Profile", pageName: "profil" },
          { displayName: "Home", pageName: "home" },
          { displayName: "Contact", pageName: "contact" },
        ]}
      ></Menu>
      {routes[currentRoute]}
    </div>
  );
}

export default App;
