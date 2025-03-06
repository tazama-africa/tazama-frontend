<template>
    <div class="px-4">
      <div>
        <div class="flex flex-wrap justify-center gap-3 mt-4 overflow-auto max-h-40">
            <pre>
                {{ genredata }}
            </pre>
          <div
            v-for="(genre, index) in genredata"
            :key="index"
            class="flex items-center text-gray-500 text-xs border border-gray-400 rounded-full py-1 p-2 px-2 cursor-pointer transition-all duration-300"
          >
            <label class="flex items-center gap-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M12.25 2.75a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19Z" />
                  <path d="M14.62 12.25a2.37 2.37 0 1 0-4.74 0a2.37 2.37 0 0 0 4.74 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12.25 18.93a6.7 6.7 0 0 1-5.24-2.53m7.24-10.53a6.69 6.69 0 0 1 4.4 4.48" />
                </g>
              </svg>
              {{ genre.name }} 
            </label>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { usePlayerStore } from "@/stores/player";
  import { onMounted, watchEffect, ref, computed } from "vue";
  import { storeToRefs } from "pinia";
  
  const playerStore = usePlayerStore();
  // const { genredata } = storeToRefs(playerStore);
  const genredata = ref[""]

  watchEffect(() => {

  });

  onMounted(async () => {
    await playerStore.postPlayerData();
  });
  console.log(playerStore.genredata)
  </script>
  
  <style scoped>
  /* Make the genre list scrollable */
  .overflow-auto {
    max-height: 200px;
    overflow-y: auto;
  }
  </style>
  