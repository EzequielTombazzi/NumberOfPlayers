export const getPlayerCount = async (appId: number): Promise<number | null> => {
  const apiKey = import.meta.env.VITE_STEAM_API_KEY;
  const url = `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?key=${apiKey}&appid=${appId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.response.player_count;
  } catch (error) {
    console.error("Error al obtener el conteo de jugadores:", error);
    return null;
  }
};
