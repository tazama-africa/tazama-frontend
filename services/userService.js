import { authHeader } from "./auth-header";

var headers = authHeader()

export const requestOptions = {
    method: 'GET',
    headers: authHeader()
};


export const userService = {
    login,
    register
};


async function login(email, password) {
    const API_URL = useRuntimeConfig().public.apiBase;
    return await $fetch(API_URL + "/login/", {
        method: 'POST',
        body: {email, password}
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
