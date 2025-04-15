export default defineNuxtRouteMiddleware(async (to) => {

  // Skip middleware during SSR to avoid premature redirects
  if (process.server) {
    return;
  }
  const authStore = useAuthStore();
  const publicRoutes = [
    "/get-started",
    "/about",
    "/contact",
    "/accounts/login",
    "/accounts/register",
    "/accounts/forgot-password",
    "/verify-code",
    "/password-reset-confirm",
  ];


  // Load auth data on client-side if not already loaded
  if (!authStore.token) {
    authStore.loadAuthData();
  }

  // Allow public routes without authentication
  if (publicRoutes.includes(to.path)) {
    return;
  }

  // Check if user is authenticated
  if (!authStore.token ) {
    return navigateTo("/get-started");

  }
  

  // Refresh token if needed
  const isTokenValid = await authStore.checkAndRefreshToken();
  if (!isTokenValid) {
    return navigateTo("/accounts/login", { redirectCode: 302 });
  }
});