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
    songsdata:[],
    songs:[],
    genredata: [], // Stores genre popularity
    playlist: [],
    loading: false,
    error: null,
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
    async getPlaylistDataStore() {
      try {
        const response = await playerService.getPlaylistService(2023);
        this.playlistdata = response.playlist_order || []; // Store playlist order
        this.songsdata = response.playlist_order || []; // Store playlist order
        // this.genredata = response.genre_popularity || []; // Store genre popularity
        this.songs = response.song_playlist ;
        // console.log(response)
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    },
    async postPlayerData(playerNo) {
      try {
        console.log(playerNo, "player No");
        navigateTo(`/player/${playerNo}`);
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
  async fetchPlaylist(playerId) {
    this.loading = true;
    this.error = null;

    try {
      this.playlist = await playerService.getPlaylist(playerId);
    } catch (error) {
      console.error("Error fetching player data:", error);
      this.error = "Failed to load playlist";
    } finally {
      this.loading = false;
    }
  },
  async getPlaylistStore() {
    this.loading = true;
    this.error = null;
    const playerId = 2020
  
    try {
      const data = await playerService.getPlaylist(playerId);
  
      if (!data || !data.playlist_order || !data.song_playlist) {
        throw new Error("Invalid playlist data");
      }
  
      // Combine playlist_order with song_playlist, filtering out null values
      this.playlist = data.playlist_order
        .map((genre, index) => ({
          genre,
          song: data.song_playlist[index] || { title: "Unknown", artist: "Unknown" }
        }))
        .filter(item => item.song.title !== "Unknown");
  
    } catch (error) {
      console.error("Error fetching player data:", error);
      this.error = "Failed to load playlist";
    } finally {
      this.loading = false;
    }
  }
  
});
