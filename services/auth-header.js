export function authHeader() {
    let access_token = '';

    if (typeof window !== 'undefined') {
        // Get token from localStorage
        access_token = localStorage.getItem('accessToken') || '';

        // Temp fix: Try getting from cookies if missing
        if (!access_token) {
            const t = useCookie('accessToken');
            access_token = t?.value || '';  // Ensure t.value exists
        }
    }
    
    if (access_token) {
        return { 'Authorization': 'Bearer ' + access_token };
    } else {
        return {};
    }
}
