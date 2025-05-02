import { authHeader } from "./auth-header";

var headers = authHeader()

export const requestOptions = {
    method: 'GET',
    headers: authHeader()
};

export const musicService = {
  getGenreService,
  getCurrentSongService,
  likesongService,
  suggestSongService,
};


async function getGenreService() {
  const API_URL = useRuntimeConfig().public.apiBase;
  
  return await $fetch(API_URL + "/active-genres/", {
      method: "GET",
  });
}


async function getCurrentSongService() {
  const API_URL = useRuntimeConfig().public.apiBase;
  const fleet_no = localStorage.getItem('fleet_no');  // this is a string

  return await $fetch(`${API_URL}/sessions/${fleet_no}/now-and-next/`, {
      method: "GET",
      headers: headers,
  });
}



async function likesongService(songId) {
  const API_URL = useRuntimeConfig().public.apiBase;
  return await $fetch(API_URL + "/like-song/", {
      method: 'POST',
      headers: authHeader(),  
      body: {songId},

  });
}


async function suggestSongService(song_id, player_no) {
  const API_URL = useRuntimeConfig().public.apiBase;
  return await $fetch(API_URL + "/suggest/song/", {
      method: 'POST',
      headers: authHeader(),  
      body: {song_id, player_no},
  });
}


