import { authHeader } from "./auth-header";

var headers = authHeader()

export const requestOptions = {
    method: 'GET',
    headers: authHeader()
};

export const playerService = {
  connectPlayer,
  getPlayer,
  getPlaylist,
  getPlaylistService
};


async function connectPlayer(playerNo) {
  const API_URL = useRuntimeConfig().public.apiBase;
  
  return await $fetch(API_URL + "/connect-player/", {
    method: "POST",
    headers: {
      ...authHeader(),
      "Content-Type": "application/json", // Ensure JSON format
    },
    body: JSON.stringify({ player_no: playerNo }) // Ensure JSON body
  });
}



async function getPlayer() {
  const API_URL = useRuntimeConfig().public.apiBase;
  
  return await $fetch(API_URL + "/connect-player/", {
      method: "GET",
      headers: authHeader(),
  });
}


export async function getPlaylist(playerId) {
  const API_URL = useRuntimeConfig().public.apiBase; // Ensure it's correctly set in Nuxt config

  return await $fetch(`${API_URL}/api/get-playlist/${playerId}/`, {
    method: "GET",
    headers: authHeader(),
  });
}


export async function getPlaylistService(playerId) {
  const API_URL = useRuntimeConfig().public.apiBase;

  try {
    return await $fetch(`${API_URL}/get-playlist/${playerId}/`, {
      method: "GET",
      headers: authHeader(),
    });
  } catch (error) {
    console.error("Failed to fetch playlist:", error);
    throw error;
  }
}



async function getGenre() {
  const API_URL = useRuntimeConfig().public.apiBase;
  
  return await $fetch(API_URL + "/active-genres/", {
      method: "GET",
      headers: authHeader(),
  });
}

