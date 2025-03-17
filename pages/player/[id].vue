<!-- <template>
    <div>
      <h1 class="text-2xl font-bold">Player {{ playerStore.playlist?.player_no }}</h1>
  
      <div v-if="playerStore.loading" class="text-blue-500">Loading...</div>
      <div v-if="playerStore.error" class="text-red-500">{{ playerStore.error }}</div>
  
      <SongPlaylistTable v-if="playerStore.playlist?.song_playlist" :playlist="playerStore.playlist.song_playlist" />
    </div>
  </template>
  
  <script setup>
  import { useRoute } from "vue-router";
  import { usePlayerStore } from "@/stores/playerdata";
//   import SongPlaylistTable from "@/components/SongPlaylistTable.vue";
  
  const route = useRoute();
  const playerStore = usePlayerStore();
  
  onMounted(() => {
    playerStore.fetchPlaylist(route.params.id);
  });
  </script>
   -->

<template>
    <div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>