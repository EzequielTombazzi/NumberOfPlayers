import React from "react";
import PlayerCount from "./components/PlayerCount";

const App: React.FC = () => {
  return (
    <div>
      <h1>Conteo de jugadores de Steam</h1>
      <PlayerCount appId={550} /> {/* Reemplaza con el appId de tu juego */}
      {/* Puedes agregar más componentes PlayerCount con diferentes appIds */}
    </div>
  );
};

export default App;
