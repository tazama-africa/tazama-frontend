export default defineNuxtPlugin(async () => {
    const authStore = useAuthStore();
    authStore.loadAuthData();
    await authStore.checkAndRefreshToken();
  });