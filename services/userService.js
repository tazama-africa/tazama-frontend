import { authHeader } from "./auth-header";

var headers = authHeader()

export const requestOptions = {
    method: 'GET',
    headers: authHeader()
};


export const userService = {
    login,
    recover_password,
    recover_password_confirm,
    register,
    getListenerGenres,
    getListenerPlaylist,
    refreshToken
};


async function login(email, password) {
    const API_URL = useRuntimeConfig().public.apiBase;
    return await $fetch(API_URL + "/login/", {
        method: 'POST',
        body: {email, password}
    });
}

async function recover_password(email) {
    const API_URL = useRuntimeConfig().public.apiBase;
    return await $fetch(API_URL + "/recover-password/", {
        method: 'POST',
        body: {email}
    });
}

async function recover_password_confirm(password, token) {
    const API_URL = useRuntimeConfig().public.apiBase;
    return await $fetch(API_URL + "/confirm-password/", {
        method: 'POST',
        body: {password, token}
    });
}


async function refreshToken(refreshToken) {
    const response = await fetch("/api/token/refresh/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh: refreshToken }),
    });
}

async function register(email, phone, password, genres) {
    const API_URL = useRuntimeConfig().public.apiBase;
    console.log("Registering user:", email, phone, password, genres)
    return await $fetch(API_URL + "/register/", {
        method: 'POST',
        body: {email, phone, password, genres}
    });
}



async function getListenerGenres() {
    const API_URL = useRuntimeConfig().public.apiBase;
    
    return await $fetch(API_URL + "/listener-genres/", {
        method: "GET",
        headers: authHeader(),
    });
}


async function getListenerPlaylist() {
    const API_URL = useRuntimeConfig().public.apiBase;
    
    return await $fetch(API_URL + "/recommended-playlists/", {
        method: "GET",
        headers: authHeader(),
    });
}


