import { defineStore } from "pinia";
import { playerService } from "@/services/connectPlayer";
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

export const usePlayerStore = defineStore("player", {
  state: () => ({
    playlistdata: [],
    genredata: [], // Stores genre popularity
  }),
  actions: {
    async getPlayerData() {
      try {
        const response = await playerService.getPlayer();
        this.playlistdata = response.playlist_order || []; // Store playlist order
        this.genredata = response.genre_popularity || []; // Store genre popularity
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    },
    async postPlayerData(playerNo) {
      try {
        console.log(playerNo, "player No");
        navigateTo("/player/jam-music");
        Toast.fire({
          icon: "success",
          title: "Connected to test Jam! Like and suggest songs. Enjoy!",
        });
        const response = await playerService.connectPlayer(playerNo);
        
        // Ensure correct data extraction
        if (response) {
          this.playlistdata = response.playlist_order || [];
          this.genredata = response.genre_popularity || [];
        }

        console.log("Genre Popularity:", this.genredata);
      } catch (error) {
        console.error("Error connecting player:", error);
      }
    },
  },
});
