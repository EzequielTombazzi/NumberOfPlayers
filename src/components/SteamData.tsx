import React, { useState, useEffect } from "react";
import "./SteamData.css";

interface SteamDataResponse {
  response: {
    player_count: number;
  };
}

const SteamData: React.FC = () => {
  const [playerCount, setPlayerCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const apiKey = "TU_CLAVE_DE_API";
  const appId = "550"; // ID left 4 dead 2

  useEffect(() => {
    // Función para obtener datos de la API
    const fetchData = async () => {
      try {
        // Usa el proxy configurado en vite.config.ts
        const response = await fetch(
          `/api/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${appId}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }

        const data: SteamDataResponse = await response.json();
        setPlayerCount(data.response.player_count);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="banner">
      <img src="/banner 2 l4d.jpg" alt="l4d banner" />
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <h2>Cantidad de jugadores en línea: {playerCount}</h2>
      )}
    </div>
  );
};

export default SteamData;
