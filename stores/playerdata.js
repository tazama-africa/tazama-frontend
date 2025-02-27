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
  }),
  actions: {
    async getPlayerData() {
      try {
        const response = await playerService.getPlayer();
        this.playlistdata = response; // Store data in state
      } catch (error) {
        console.error("Error fetching meter data:", error);
      }
    },
    async postPlayerData( playerNo ) {
      try {
        console.log(playerNo )
        navigateTo("/player/jam-music");
        Toast.fire({
          icon: "success",
          title: "Connected to Jam! Like and suggest songs. Enjoy!",
        });
        // const response = await playerService.connectPlayer( playerNo );
        // this.playlistdata = response; // Store data in state
      } catch (error) {
        console.error("Error fetching meter data:", error);
      }
    },
  },
});
