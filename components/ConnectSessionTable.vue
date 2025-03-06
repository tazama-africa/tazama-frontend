<script setup lang="ts">
import { ref, computed } from 'vue'
import Swal from "sweetalert2";


// Add state for liked songs
const likedSongs = ref(new Set())


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


// Function to toggle like status
const toggleLike = (songId) => {
  if (likedSongs.value.has(songId)) {
    likedSongs.value.delete(songId)
    Toast.fire({
      icon: "success",
      title: "Unlike",
    });

    // Show unliked toast
    console.log('liked')
  } else {
    likedSongs.value.add(songId)
    // Show liked toast
    console.log('liked')
    Toast.fire({
      icon: "success",
      title: "Like",
    });
  }
}

const columns = [
  { key: 'id', label: '#', class: 'w-10 text-right ' }, // Always visible
  { key: 'title', label: 'Song', class: 'pl-1' }, // Always visible
  { key: 'artist', label: 'Artist', class: 'hidden lg:table-cell' }, // Hidden on small screens
  { key: 'duration', label: 'Duration', class: 'hidden lg:table-cell text-left' }, // Hidden on small screens
  { key: 'options', label: 'Options', class: 'text-center w-24 hidden lg:table-cell text-left' } // Always visible
];


const songs = [
  {
    id: 1,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    duration: '3:20'
  },
  {
    id: 2,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    duration: '3:36'
  },
  {
    id: 3,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Peaches',
    artist: 'Justin Bieber',
    duration: '3:18'
  },
  {
    id: 4,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Levitating',
    artist: 'Dua Lipa',
    duration: '3:23'
  },
  {
    id: 5,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    duration: '3:54'
  },
  {
    id: 6,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Industry Baby',
    artist: 'Lil Nas X',
    duration: '3:32'
  },
  {
    id: 7,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Stay',
    artist: 'The Kid LAROI & Justin Bieber',
    duration: '2:21'
  },
  {
    id: 8,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'good 4 u',
    artist: 'Olivia Rodrigo',
    duration: '2:58'
  },
  {
    id: 9,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Montero (Call Me By Your Name)',
    artist: 'Lil Nas X',
    duration: '2:18'
  },
  {
    id: 10,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Kiss Me More',
    artist: 'Doja Cat ft. SZA',
    duration: '3:28'
  },
  {
    id: 11,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Drivers License',
    artist: 'Olivia Rodrigo',
    duration: '4:02'
  },
  {
    id: 12,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Bad Habits',
    artist: 'Ed Sheeran',
    duration: '3:51'
  },
  {
    id: 13,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Butter',
    artist: 'BTS',
    duration: '2:44'
  },
  {
    id: 14,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Easy On Me',
    artist: 'Adele',
    duration: '3:45'
  },
  {
    id: 15,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Shivers',
    artist: 'Ed Sheeran',
    duration: '3:27'
  },
  {
    id: 16,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Heat Waves',
    artist: 'Glass Animals',
    duration: '3:59'
  },
  {
    id: 17,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Dynamite',
    artist: 'BTS',
    duration: '3:19'
  },
  {
    id: 18,
    cover: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=',
    title: 'Happier Than Ever',
    artist: 'Billie Eilish',
    duration: '4:58'
  }
]

const q = ref('')
const filteredRows = computed(() => {
  if (!q.value) {
    return songs
  }
  return songs.filter((song) =>
    Object.values(song).some((value) =>
      String(value).toLowerCase().includes(q.value.toLowerCase())
    )
  )
})
</script>

<template>
  <div class="flex flex-col ">
    <div class="flex items-center lg:px-10 px-2 justify-between py-3">
      <div class="font-small">
        <div class="flex items-center gap-2">
          <div class="flex justify-center items-center">
            <div
              class="flex items-center justify-center lg:p-2 p-0.5 lg:py-3 lg:text-sm text-xs text-gray-50 border border-gray-300 rounded-lg lg:w-10 lg:h-9  w-7 h-7 bg-gradient-to-l from-orange-600 to-yellow-600">
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
          <div class="font-bold lg:text-xl  text-xs  text-orange-600">
            Songs
          </div>
        </div>
      </div>
      <div class="flex">
        <UInput v-model="q" placeholder="Search song..." class="w-64" />
      </div>
    </div>

    <!-- Container with fixed height and scroll -->
    <div class="overflow-auto overflow-x-hidden lg:p-5 pb-10" style="max-height: 60vh;">
      <UTable :rows="filteredRows" :columns="columns" hover>
        <!-- ID Column: Hidden on small screens -->
        <template #id-data="{ row }">
          <span class="text-right pr-0">{{ row.id }}</span>
        </template>

        <!-- Merge Image & Title Column: Always visible -->
        <template #title-data="{ row }">
          <div class="flex items-center lg:space-x-3  space-x-2  lg:w-full w-40">
            <img :src="row.cover" alt="Cover" class="w-10 h-10 rounded-md object-cover" />
            <span class="font-medium truncate max-w-xs">{{ row.title }}</span>
          </div>
        </template>

        <!-- Artist Column: Hidden on small screens -->
        <template #artist-data="{ row }">
          <span class="truncate max-w-xs hidden md:block">{{ row.artist }}</span>
        </template>

        <!-- Duration Column: Hidden on small screens -->
        <template #duration-data="{ row }">
          <span class="text-right hidden md:block">{{ row.duration }}</span>
        </template>

        <!-- Options Column: Always visible -->
        <template #options-data="{ row }">
          <div class="flex items-center justify-center space-x-3">
            <button @click="toggleLike(row.id)" class="focus:outline-none transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                :fill="likedSongs.has(row.id) ? '#3b82f6' : 'none'"
                :stroke="likedSongs.has(row.id) ? '#3b82f6' : 'currentColor'" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="transition-colors duration-200">
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                </path>
              </svg>
            </button>

            <button class="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </button>
          </div>
        </template>
      </UTable>
    </div>


  </div>
</template>