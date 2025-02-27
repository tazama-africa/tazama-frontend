import { defineStore } from "pinia";
import { userService } from "@/services/userService";
import Swal from "sweetalert2";


const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
    refreshToken: null,
    user: null,
    genres: [],
    playlist: [],
    loading: false,
    error: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await userService.login(email, password);
        if (!response.tokens || !response.tokens.access) {
          throw new Error("Invalid Credentials");
        }

        this.setAuthData(
          response.tokens.access,
          response.tokens.refresh,
          response.user
        );

        // Fetch listener genres
        await this.fetchPlaylist();

        navigateTo("/dashboard");
        Toast.fire({
          icon: "success",
          title: "Login Successful!",
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "Confirm Email and Password",
        });
      }
    },

    async registerUser(email, phone, password, genres) {
      this.loading = true;
      this.errorMessage = "";

      try {
        const response = await userService.register(email, phone, password, genres);
        if (response.tokens && response.tokens.access) {
          this.setAuthData(
            response.tokens.access,
            response.tokens.refresh,
            response.user
          );

          // Fetch listener genres
          await this.fetchPlaylist();

          navigateTo("/dashboard");
          Toast.fire({
            icon: "success",
            title: "Registration Successful!",
          });
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "Registration failed",
        });
      } finally {
        this.loading = false;
      }
    },

    async fetchGenres() {
      try {
        const genres = await userService.getListenerGenres();
        this.genres = genres;
      } catch (error) {
        console.error("Failed to fetch genres:", error);
      }
    },

    async fetchPlaylist() {
      try {
        const response = await userService.getListenerPlaylist();
        this.playlist = response.recommended_playlists; // Save in store
      } catch (error) {
        console.error("Failed to fetch playlists:", error);
      }
    },

    setAuthData(accessToken, refreshToken, user) {
      this.token = accessToken;
      this.refreshToken = refreshToken;
      this.user = user;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(user));
    },

    logout() {
      this.token = null;
      this.refreshToken = null;
      this.user = null;

      // Clear localStorage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      alert("Logged out successfully");
    },

    loadAuthData() {
      // Load stored tokens & user data on app refresh
      this.token = localStorage.getItem("accessToken");
      this.refreshToken = localStorage.getItem("refreshToken");
      this.user = JSON.parse(localStorage.getItem("user")) || null;
    },
  },
});
