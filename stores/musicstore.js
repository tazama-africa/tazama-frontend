import { defineStore } from "pinia";
import { musicService } from "@/services/musicService";
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

export const useMusicStore = defineStore("music", {
  state: () => ({
    playlistdata: [],
    songsdata: [],
    songs: [],
    nownextsongs: [],
    genredata: [], // Stores genre data
    playlist: [],
    loading: false,
    error: null,
  }),
  actions: {
    async getMusicData() {
      this.loading = true;
      this.error = null;
      try {
        const response = await musicService.getGenreService();
        this.genredata = response.map(genre => ({
          id: genre.id,
          label: genre.title, // Map 'title' to 'label' for UI consistency
        })); 
      } catch (error) {
        this.error = "Failed to fetch genres";
        console.error("Error fetching player data:", error);
        Toast.fire({
          icon: "error",
          title: "Failed to load genres",
        });
      } finally {
        this.loading = false;
      }
    },
    async getNowNextData() {
      this.loading = true;
      this.error = null;
      try {
        const response = await musicService.getCurrentSongService();
        this.nownextsongs = response || []; 
      } catch (error) {
        this.error = "Failed to fetch Now & Next";
        console.log(error)
      
      } finally {
        this.loading = false;
      }
    },
    async likesong(songId) {
      try {
        const likedsong = await musicService.likesongService(songId);
        console.log(`Song ${songId} liked`);
        // Toast.fire({
        //   icon: "success",
        //   title: "Song liked successfully",
        // });
      } catch (error) {
        this.error = "Failed to like song";
        console.error("Error liking song:", error);
        Toast.fire({
          icon: "error",
          title: "Failed to like song",
        });
        // Remove from likedSongs if the API call fails
        // this.likedSongs.delete(songId);
      }
    },
    async suggestsong(songId, playerNo) {
      try {
        const suggestsong = await musicService.suggestSongService(songId, playerNo);
        console.log(`Song ${songId} suggested`);
        Toast.fire({
          icon: "success",
          title: "Song added to queue",
        });
      } catch (error) {
        this.error = "Failed to suggest song";
        Toast.fire({
          icon: "error",
          title: "Suggestion Slots are full",
        });
      }
    }
  },
});