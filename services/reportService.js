import { authHeader } from "./auth-header";
var headers = authHeader()
export const requestOptions = {
    method: 'GET',
    headers: authHeader()
};

export const reportService = {
    PostReport,
    getReport,
    deleteReport,
    getHistory,
    deleteHistory,
    getLikedSongs,
    getPrefferedGenre,
}


async function PostReport(payload) {
    const API_URL = useRuntimeConfig().public.apiBase;
    return await $fetch(API_URL + "/post-report/", {
        method: 'POST',
        body: payload,
        headers: headers,
    });
}

async function getReport() {
    const API_URL = useRuntimeConfig().public.apiBase;
    const userRaw = localStorage.getItem('user');  // this is a string

    // Parse the string to an object
    const userObj = JSON.parse(userRaw);

    const email = userObj.email; // Now you have just the email!

    return await $fetch(`${API_URL}/get-report/${email}`, {
        method: "GET",
        headers: headers,
    });
}

async function deleteReport(report_id) {
    const API_URL = useRuntimeConfig().public.apiBase;
    return await $fetch(API_URL + "/delete-report/", {
        method: 'POST',
        body: {report_id: report_id},
        headers: headers,
    });
}


// History
async function getHistory() {
    const API_URL = useRuntimeConfig().public.apiBase;
    const userRaw = localStorage.getItem('user');  // this is a string

    // Parse the string to an object
    const userObj = JSON.parse(userRaw);

    const email = userObj.email; // Now you have just the email!

    return await $fetch(`${API_URL}/get-history/${email}`, {
        method: "GET",
        headers: headers,
    });
}

async function deleteHistory(report_id) {
    const API_URL = useRuntimeConfig().public.apiBase;
    return await $fetch(API_URL + "/delete-history/", {
        method: 'POST',
        body: {report_id: report_id},
        headers: headers,
    });
}


// liked songs
async function getLikedSongs() {
    const API_URL = useRuntimeConfig().public.apiBase;
    const userRaw = localStorage.getItem('user');  // this is a string

    // Parse the string to an object
    const userObj = JSON.parse(userRaw);

    const email = userObj.email; // Now you have just the email!

    return await $fetch(`${API_URL}/get-liked-song/${email}`, {
        method: "GET",
        headers: headers,
    });
}

async function getPrefferedGenre() {
    const API_URL = useRuntimeConfig().public.apiBase;
    const userRaw = localStorage.getItem('user');  // this is a string

    // Parse the string to an object
    const userObj = JSON.parse(userRaw);

    const email = userObj.email; // Now you have just the email!

    return await $fetch(`${API_URL}/get-preffered-genre/${email}`, {
        method: "GET",
        headers: headers,
    });
}

