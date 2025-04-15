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
    tokenExpiration: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await userService.login(email, password);
        if (!response.tokens || !response.tokens.access) {
          throw new Error("Invalid Credentials");
        }
        this.setAuthData(response.tokens.access, response.tokens.refresh, response.user);
        await this.fetchPlaylist();
        navigateTo("/");
        Toast.fire({ icon: "success", title: "Login Successful!" });
      } catch (error) {
        Toast.fire({ icon: "error", title: "Confirm Email and Password" });
      }
    },
    async recoverPassword(email) {
      try {
        await userService.recover_password(email);
        Toast.fire({ icon: "success", title: "Email Sent Successfully" });
      } catch (error) {
        navigateTo("/accounts/register");
        Toast.fire({ icon: "error", title: "Account Does not Exist" });
      }
    },
    async registerUser(email, phone, password, genres) {
      this.loading = true;
      try {
        const response = await userService.register(email, phone, password, genres);
        if (response.tokens && response.tokens.access) {
          this.setAuthData(response.tokens.access, response.tokens.refresh, response.user);
          await this.fetchPlaylist();
          navigateTo("/");
          Toast.fire({ icon: "success", title: "Registration Successful!" });
        }
      } catch (error) {
        Toast.fire({ icon: "error", title: "Registration failed" });
      } finally {
        this.loading = false;
      }
    },
    async confirmPassword(password, token) {
      try {
        await userService.recover_password_confirm(password, token);
        Toast.fire({ icon: "success", title: "Password Reset Successfully" });
        navigateTo("/accounts/login");
      } catch (error) {
        Toast.fire({ icon: "error", title: "Account Does not Exist" });
      }
    },
    async fetchGenres() {
      try {
        this.genres = await userService.getListenerGenres();
      } catch (error) {
        console.error("Failed to fetch genres:", error);
      }
    },
    async fetchPlaylist() {
      try {
        const response = await userService.getListenerPlaylist();
        this.playlist = response.recommended_playlists;
      } catch (error) {
        console.error("Failed to fetch playlists:", error);
      }
    },
    setAuthData(accessToken, refreshToken, user) {
      this.token = accessToken;
      this.refreshToken = refreshToken;
      this.user = user;
      const decoded = this.decodeJWT(accessToken);
      this.tokenExpiration = decoded ? decoded.exp * 1000 : Date.now() + 3600000;

      if (process.client) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(user));
      }
    },
    decodeJWT(token) {
      try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split("")
            .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
        );
        return JSON.parse(jsonPayload);
      } catch (e) {
        console.error("Failed to decode JWT", e);
        return null;
      }
    },
    async refreshAccessToken() {
      if (!this.refreshToken) {
        this.logout();
        return false;
      }
      try {
        const response = await userService.refreshToken(this.refreshToken);
        if (response.access) {
          this.setAuthData(response.access, this.refreshToken, this.user);
          return true;
        }
        throw new Error("Refresh token invalid");
      } catch (error) {
        console.error("Token refresh failed:", error);
        this.logout();
        if (process.client) {
          navigateTo("/accounts/login");
          Toast.fire({ icon: "error", title: "Session expired, please log in again" });
        }
        return false;
      }
    },
    async checkAndRefreshToken() {
      if (!this.token || !this.tokenExpiration) return false;
      const now = Date.now();
      const buffer = 5 * 60 * 1000; // 5 min
      if (now >= this.tokenExpiration - buffer) {
        return await this.refreshAccessToken();
      }
      return true;
    },
    logout() {
      this.token = null;
      this.refreshToken = null;
      this.user = null;
      this.tokenExpiration = null;
      if (process.client) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        Toast.fire({ icon: "success", title: "Logged out successfully" });
      }
    },
    loadAuthData() {
      if (process.client) {
        this.token = localStorage.getItem("accessToken");
        this.refreshToken = localStorage.getItem("refreshToken");
        this.user = JSON.parse(localStorage.getItem("user")) || null;
        if (this.token) {
          const decoded = this.decodeJWT(this.token);
          this.tokenExpiration = decoded ? decoded.exp * 1000 : null;
        }
      }
    },
  },
});