import { authHeader } from "./auth-header";

var headers = authHeader()

export const requestOptions = {
    method: 'GET',
    headers: authHeader()
};

export const playerService = {
  connectPlayer,
  getPlayer
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

