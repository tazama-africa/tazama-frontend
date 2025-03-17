<script setup>
import { ref, computed, onMounted, resolveComponent } from "vue";
import Swal from "sweetalert2";

const UBadge = resolveComponent("UBadge");

const playlist = ref([]);
const globalFilter = ref(""); // Search input model
const listenerCount = ref(0);
const sessionId = "1234"; // Replace with actual session ID
let ws = null;

const likedSongs = ref(new Set());

onMounted(() => {
  if (process.client) {
    connectWebSocket();
  }
});

const connectWebSocket = () => {
  ws = new WebSocket(`ws://127.0.0.1:8000/ws/session/${sessionId}/`);

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.playlist) {
      playlist.value = data.playlist;
    }
    if (data.listener_count !== undefined) {
      listenerCount.value = data.listener_count;
    }
  };

  ws.onclose = () => {
    console.log("WebSocket disconnected, reconnecting...");
    setTimeout(connectWebSocket, 3000);
  };
};

const toggleLike = (songId) => {
  if (likedSongs.value.has(songId)) {
    likedSongs.value.delete(songId);
  } else {
    likedSongs.value.add(songId);
  }
};

// Computed property to filter playlist
const filteredPlaylist = computed(() => {
  if (!globalFilter.value) {
    return playlist.value;
  }
  return playlist.value.filter((song) =>
    song.title.toLowerCase().includes(globalFilter.value.toLowerCase()) ||
    song.artist.toLowerCase().includes(globalFilter.value.toLowerCase()) ||
    song.genre.toLowerCase().includes(globalFilter.value.toLowerCase())
  );
});

const columns = [
  { key: "title", label: "Song" },
  { key: "artist", label: "Artist" },
  { key: "genre", label: "Genre" },
  { key: "options", label: "Actions", class: "text-center" }
];
</script>

<template>
  <div class="flex flex-col overflow-auto overflow-x-hidden lg:p-5 pb-10">
    <div class="flex items-center lg:px-2 px-2 justify-between py-3">
      <div class="font-small gap-2 flex flex-row items-center">
        <div class="flex items-center gap-2">
          <div class="flex justify-center items-center">
            <div
              class="flex items-center justify-center lg:p-2 p-0.5 lg:py-3 lg:text-sm text-xs text-gray-50 border border-gray-300 rounded-lg  w-7 h-7 bg-gradient-to-l from-orange-600 to-yellow-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path fill="currentColor" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20"
                    d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5">
                    <animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite"
                      values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5" />
                    <animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1" />
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0" />
                  </path>
                  <path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0" />
                  </path>
                </g>
              </svg>
            </div>
          </div>
          <div class="lg:text-lg font-bold text-xs text-orange-600">Songs</div>
        </div>
        <div class="flex gap-1">
            <UAvatarGroup max="1">
              <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
            </UAvatarGroup> 
            <div class="flex items-center">
              <p class="text-xs"> + {{ listenerCount }}</p>
            </div>         
        </div>
      </div>
      <div class="flex">
        <UInput v-model="globalFilter" placeholder="Search song..." class="w-64" />
      </div>
    </div>


    <UTable :rows="filteredPlaylist" :columns="columns" hover>
      <template #title-data="{ row }">
        <div class="flex items-center lg:space-x-3 space-x-2 lg:w-full w-48">
          <div class="w-1/4 lg:w-auto">
            <img :src="row.cover || 'https://hub.yamaha.com/wp-content/uploads/2021/09/How-vinyl-made-Fig.-2.jpg'"
              alt="Cover" class="w-10 h-10 rounded-md object-cover" />
          </div>
          <div class="w-3/4 lg:w-auto">
            <span class="font-medium truncate max-w-xs">{{ row.title }}</span>
            <span class="truncate max-w-xs text-xs lg:hidden block">{{ row.artist }}</span>
          </div>
        </div>
      </template>

      <template #artist-data="{ row }">
        <span class="truncate max-w-xs hidden md:block">{{ row.artist }}</span>
      </template>

      <template #options-data="{ row }">
        <div class="flex items-center justify-center space-x-3">
          <button @click="toggleLike(row.id)" class="focus:outline-none transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
              :fill="likedSongs.has(row.id) ? 'orange' : 'none'"
              :stroke="likedSongs.has(row.id) ? 'orange' : 'currentColor'" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="transition-colors duration-200">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
              </path>
            </svg>
          </button>
        </div>
      </template>
    </UTable>
  </div>
</template>
