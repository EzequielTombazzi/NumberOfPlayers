import React, { useEffect, useState } from "react";
import { getPlayerCount } from "../services/steamApi";

interface PlayerCountProps {
  appId: number;
}

const PlayerCount: React.FC<PlayerCountProps> = ({ appId }) => {
  const [playerCount, setPlayerCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchPlayerCount = async () => {
      const count = await getPlayerCount(appId);
      setPlayerCount(count);
    };
    fetchPlayerCount();
  }, [appId]);

  return (
    <div>
      <h1>
        Jugadores en línea: {playerCount !== null ? playerCount : "Cargando..."}
      </h1>
    </div>
  );
};

export default PlayerCount;
