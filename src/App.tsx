import React from "react";
import SteamData from "./components/SteamData";
import "./styles/App.css";
import TextInfo from "./components/TextInfo";

const App: React.FC = () => {
  return (
    <div>
      <SteamData />
      <TextInfo />
    </div>
  );
};

export default App;
