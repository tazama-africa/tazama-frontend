<template>
    <div class="w-full text-white px-4 my-5 mb-10 space-y-4">
      <div
        v-for="(song, index) in songs"
        :key="index"
        class="flex justify-between items-center"
      >
        <div class="flex gap-3 items-center">
          <img
            :src="song.image"
            alt="album cover"
            class="w-12 h-12 object-cover rounded-md shadow-md"
          />
          <div>
            <div class="font-semibold">{{ song.title }}</div>
            <div class="text-xs text-gray-400">{{ song.artist }}</div>
          </div>
        </div>
        <div>
          <svg
            @click="openDrawer(song)"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 cursor-pointer text-gray-400 hover:text-white transition"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 144a64 64 0 1 0-64-64a64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32a32.036 32.036 0 0 1 32-32m0 320a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32m0-272a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32"
            />
          </svg>
        </div>
      </div>
  
      <!-- Drawer Backdrop -->
      <Transition name="fade">
        <div 
          v-if="selectedSong"
          @click.self="closeDrawer"
          class="fixed inset-0   z-40"
        ></div>
      </Transition>
  
      <!-- Bottom Drawer -->
      <Transition name="slide-up">
        <div style="background-color: #212121;"
          v-if="selectedSong"
          class="fixed bottom-0 left-0 right-0  text-white h-40 rounded-t-2xl p-4 z-50"
        >
          <div class="flex justify-between items-center mb-4">
            <div class="flex gap-3 items-center">
              <img
                :src="selectedSong.image"
                alt="cover"
                class="w-10 h-10 rounded-md object-cover shadow"
              />
              <div>
                <div class="text-lg font-semibold">{{ selectedSong.title }}</div>
                <div class="text-sm text-gray-400">{{ selectedSong.artist }}</div>
              </div>
            </div>
            <button @click="closeDrawer" class="text-gray-400 hover:text-white text-xl">×</button>
          </div>    
          <div class="flex justify-around mt-4">
            <button class="flex flex-col items-center text-green-500 hover:text-green-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                  4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 
                  2.09C13.09 4.01 14.76 3 16.5 
                  3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                  6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span class="text-xs">Like</span>
            </button>
            <button class="flex flex-col items-center text-red-500 hover:text-red-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 
                  10 10 10 10-4.48 10-10S17.52 
                  2 12 2zm5 13H7v-2h10v2z"
                />
              </svg>
              <span class="text-xs">Dislike</span>
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
 
  const songs = [
    {
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      image: 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg'
    },
    {
      title: 'Levitating',
      artist: 'Dua Lipa',
      image: 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg'
    },
    {
      title: 'Peaches',
      artist: 'Justin Bieber',
      image: 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg'
    },
    {
      title: 'Save Your Tears',
      artist: 'The Weeknd',
      image: 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg'
    },
    {
      title: 'Stay',
      artist: 'The Kid LAROI & Justin Bieber',
      image: 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg'
    },
    {
      title: 'Bad Habits',
      artist: 'Ed Sheeran',
      image: 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg'
    },
    {
      title: 'Watermelon Sugar',
      artist: 'Harry Styles',
      image: 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg'
    },
    {
      title: 'Positions',
      artist: 'Ariana Grande',
      image: 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg'
    },
    {
      title: 'Don’t Start Now',
      artist: 'Dua Lipa',
      image: 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg'
    },
    {
      title: 'Kiss Me More',
      artist: 'Doja Cat ft. SZA',
      image: 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg'
    },
    {
      title: 'Montero (Call Me By Your Name)',
      artist: 'Lil Nas X',
      image: 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg'
    },
    {
      title: 'Butter',
      artist: 'BTS',
      image: 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg'
    },
    {
      title: 'Good 4 U',
      artist: 'Olivia Rodrigo',
      image: 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg'
    },
    {
      title: 'Industry Baby',
      artist: 'Lil Nas X & Jack Harlow',
      image: 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg'
    },
    {
      title: 'Blame It on Me',
      artist: 'George Ezra',
      image: 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg'
    }
  ]
  
  
  const selectedSong = ref(null)
  
  function openDrawer(song) {
    selectedSong.value = song
  }
  
  function closeDrawer() {
    selectedSong.value = null
  }
  </script>
  
  <style scoped>
  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: transform 0.3s ease;
  }
  .slide-up-enter-from,
  .slide-up-leave-to {
    transform: translateY(100%);
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  