import React from "react";
import SteamData from "./components/SteamData";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div>
      <h1>API de Steam en React</h1>
      <SteamData />
    </div>
  );
};

export default App;
