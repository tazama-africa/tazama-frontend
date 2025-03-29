import { authHeader } from "./auth-header";

var headers = authHeader()

export const requestOptions = {
    method: 'GET',
    headers: authHeader()
};

export const musicService = {
  getGenreService,
  likesongService
};


async function getGenreService() {
  const API_URL = useRuntimeConfig().public.apiBase;
  
  return await $fetch(API_URL + "/active-genres/", {
      method: "GET",
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


async function suggestSongService(songId, playerNo) {
  const API_URL = useRuntimeConfig().public.apiBase;
  return await $fetch(API_URL + "/suggest/song/", {
      method: 'POST',
      headers: authHeader(),  
      body: {songId, playerNo},

  });
}


