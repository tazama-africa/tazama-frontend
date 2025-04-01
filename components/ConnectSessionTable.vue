<script setup>
import { ref, computed, onMounted, resolveComponent, watch } from "vue";
import Swal from "sweetalert2";
import { useMusicStore } from '@/stores/musicstore';
import { storeToRefs } from "pinia";

const UBadge = resolveComponent("UBadge");

const musicStore = useMusicStore();
const playlist = ref([]);
const globalFilter = ref("");
const searchResults = ref([]); // New ref for API search results
const listenerCount = ref(0);
const sessionId = "3000";
let ws = null;
const isSearching = ref(false); // To track if we're showing search results

const likedSongs = ref(new Set());

// Debounce function to limit API calls
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Function to fetch search results from API
const searchSongs = async (query) => {
  if (!query.trim()) {
    isSearching.value = false;
    searchResults.value = [];
    return;
  }

  try {
    isSearching.value = true;
    // const response = await fetch(`http://127.0.0.1:8000/api/search/song/?q=${encodeURIComponent(query)}`);
    const response = await fetch(`https://tazama.africa/api/search/song/?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    if (data.status === "success") {
      // Map the API response to match our playlist format
      searchResults.value = data.data.tracks.map(track => ({
        id: track.id,
        title: track.name,
        artist: track.artists.join(", "),
        genre: track.genre,
        cover: track.image,
        duration_ms: track.duration_ms,
        popularity: track.popularity
      }));
    }
  } catch (error) {
    console.error("Error fetching search results:", error);
    isSearching.value = false;
    searchResults.value = [];
  }
};

// Debounced version of searchSongs
const debouncedSearch = debounce(searchSongs, 300);

// Watch for changes in globalFilter
watch(globalFilter, (newValue) => {
  debouncedSearch(newValue);
});

onMounted(() => {
  if (process.client) {
    connectWebSocket();
  }
});

// Rest of your existing WebSocket code remains the same
const connectWebSocket = () => {
  const playerNo = window.location.pathname.split('/player/')[1] || 'default';
  const sessionId = playerNo;

  // ws = new WebSocket(`ws://127.0.0.1:8000/ws/session/${sessionId}/`);
  ws = new WebSocket(`wss://tazama.africa/ws/session/${sessionId}/`);

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

const toggleLike = async (songId) => {

  if (likedSongs.value.has(songId)) {
    likedSongs.value.delete(songId);
  } else {
    likedSongs.value.add(songId);
    try {
      await musicStore.likesong(songId);
    } catch (error) {
      console.log(error);
    }
  }
};
const SuggestSong = async (songId) => {
  const playerNo = window.location.pathname.split('/player/')[1] || 'default';
  const sessionId = playerNo;
  console.log(songId, sessionId);

  // Create WebSocket connection
  let ws = new WebSocket(`ws://127.0.0.1:8000/ws/session/${sessionId}/`);

  // Set up message handler
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.playlist) {
      playlist.value = data.playlist;
    }
    if (data.listener_count !== undefined) {
      listenerCount.value = data.listener_count;
    }
  };

  try {
    await musicStore.suggestsong(songId, sessionId);
    globalFilter.value = ("")
    
    // Disconnect the WebSocket
    ws.close();
    
    // Reconnect after a short delay
    setTimeout(() => {
      ws = new WebSocket(`ws://127.0.0.1:8000/ws/session/${sessionId}/`);
      
      // Reattach message handler for the new connection
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
        console.log("WebSocket disconnected");
      };
    }, 1000); // 1 second delay before reconnecting
    
  } catch (error) {
    console.log(error);
    ws.close(); // Ensure socket is closed on error
  }
};
// Modified filteredPlaylist to use search results when available
const filteredPlaylist = computed(() => {
  if (isSearching.value && searchResults.value.length > 0) {
    return searchResults.value;
  }

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
  { key: 'title', label: 'Song', class: 'pl-4' },
  { key: 'artist', label: 'Artist', class: 'hidden lg:table-cell' },
  { key: "genre", label: "Genre", class: 'hidden lg:table-cell text-left' },
  { key: 'options', label: 'Options', class: 'text-center hidden lg:table-cell text-left' }
];
</script>



<template>
  <div class="flex flex-col overflow-auto overflow-x-hidden lg:p-5 pb-10">
    <div class="flex flex-col lg:flex-row gap-2 w-full lg:items-center lg:px-2 px-2 justify-between py-3">
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
        <UInput v-model="globalFilter" icon="i-lucide-search" size="md" class="lg:w-64 w-full"
          placeholder="Search..." />
      </div>
    </div>


    <UTable :rows="filteredPlaylist" :columns="columns" hover>
      <template #title-data="{ row }">
        <div class="flex items-center lg:space-x-3 space-x-2 lg:w-full w-56">
          <div class="w-1/6 lg:w-auto">
            <img :src="row.cover || 'https://hub.yamaha.com/wp-content/uploads/2021/09/How-vinyl-made-Fig.-2.jpg'"
              alt="Cover" class="lg:w-10 lg:h-10 w-7 h-7 rounded-md object-cover" />
          </div>
          <div class="w-5/6 lg:w-auto">
            <span class="font-medium truncate lg:w-60 max-w-full whitespace-nowrap block">{{ row.title }}</span>
            <span class="truncate max-w-xs text-xs lg:hidden block">{{ row.artist }}</span>
          </div>
        </div>
      </template>

      <template #artist-data="{ row }">
        <span class="truncate max-w-xs hidden md:block">{{ row.artist }}</span>
      </template>
      <template #genre-data="{ row }">
        <span class="truncate max-w-xs hidden md:block">{{ row.genre }}</span>
      </template>

      <template #options-data="{ row }">
        <div v-if="row.status">
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
        </div>
        <div v-else>
          <div class="flex items-center justify-center space-x-3">
            <button @click="SuggestSong(row.id)" class="focus:outline-none transition-colors duration-200">

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                :fill="likedSongs.has(row.id) ? 'orange' : 'none'"
                :stroke="likedSongs.has(row.id) ? 'orange' : 'currentColor'">
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" />
                  <path d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z" />
                </g>
              </svg>
            </button>
          </div>
        </div>

      </template>
    </UTable>
  </div>
</template>
