export default defineNuxtRouteMiddleware(async (to) => {

  // Skip middleware during SSR to avoid premature redirects
  if (process.server) {
    return;
  }
  const authStore = useAuthStore();
  const publicRoutes = [
    "/",
    "/about",
    "/contact",
    "/accounts/login",
    "/accounts/register",
    "/accounts/forgot-password",
    "/verify-code",
    "/reset-password",
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
    return navigateTo("/accounts/login");

  }
  

  // Refresh token if needed
  const isTokenValid = await authStore.checkAndRefreshToken();
  if (!isTokenValid) {
    return navigateTo("/accounts/login", { redirectCode: 302 });
  }
});