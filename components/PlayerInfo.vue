<template>
    <!-- <div>

        <div class="song-info-section w-full max-w-md space-y-4">
        <div class="flex justify-center">
          <div class="p-2 cursor-pointer rounded-lg text-orange-600 text-2xl">
            <NuxtImg src="/logo-block-t.png" class="w-full h-32 object-cover" />
          </div>
        </div>

        <div class="h-[40vh] p-4 glassmorphic-bg overflow-y-auto rounded-xl">
          <h3 class="text-white text-xl border-b pb-1 mb-4 font-bold">Vehicle Information</h3>
          <a href="#" class="flex flex-col bg-white border rounded-lg shadow-sm hover:bg-gray-100 mb-4">
            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-2/5 p-2">
                <img class="object-cover w-full rounded-xl h-32 md:h-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQMJV521Kj_D6VHlE-NuNiRBnEKNiwWgtFQ&s" alt="">
              </div>
              <div class="w-full md:w-3/5 p-2">
                <h5 class="mb-2 text-xl font-bold text-gray-800">Vehicle</h5>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center gap-2">Fleet No: 2020</div>
                  <div class="flex items-center gap-2">Number Plate: KDB 405K</div>
                  <div class="bg-green-50 border border-green-600 rounded-lg p-2 flex justify-between">
                    <span>Contact:</span>
                    <span class="text-green-800 font-bold">0729091999</span>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="#" class="flex flex-col bg-white border rounded-lg shadow-sm hover:bg-gray-100">
            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-2/5 p-2">
                <img class="object-cover w-full rounded-xl h-32 md:h-full"
                  src="https://i0.wp.com/morethanuseless.com/wp-content/uploads/2024/05/location.jpg?ssl=1" alt="">
              </div>
              <div class="w-full md:w-3/5 p-2">
                <h5 class="mb-2 text-xl font-bold text-gray-800">Location</h5>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center gap-2">Route: Nairobi - Thika</div>
                  <div class="flex items-center gap-2">Current Location: Kimbo</div>
                  <div class="bg-orange-50 border border-orange-600 rounded-lg p-2 flex justify-between">
                    <span>Time:</span>
                    <span class="text-orange-800 font-bold">5:49 P.M</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900 shadow-lg overflow-hidden">
          <div class="p-4">
            <h3 class="text-white text-lg font-bold">Playing Now</h3>
            <div v-if="currentSong" class="flex items-center mt-2">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-900 rounded-md mr-3 overflow-hidden">
                <NuxtImg v-if="currentSong.art" :src="currentSong.art" alt="Album Art" class="w-full h-full object-cover" />
                <NuxtImg v-else src="/logo-icon.png" alt="Default" class="w-full h-full object-cover" />
              </div>
              <div>
                <span class="text-white font-semibold text-sm">{{ currentSong.title }}</span>
                <span class="text-gray-400 text-xs block">{{ currentSong.artist }}</span>
              </div>
              <div>
                <button @click="advanceSong" class="next-song-btn">Next Song</button>
              </div>
            </div>
            <div v-else class="text-gray-500 italic">Advertisement</div>
            <div class="progress-bar w-full h-1 bg-gray-700 mt-3 rounded-full overflow-hidden">
              <div class="progress h-full bg-orange-500" :style="{ width: progressWidth + '%' }"></div>
            </div>
          </div>
          <div class="p-4">
            <h3 class="text-white text-lg font-semibold opacity-80">Up Next</h3>
            <div v-if="nextSong" class="flex items-center mt-2">
              <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-md mr-2 overflow-hidden">
                <NuxtImg v-if="nextSong.art" :src="nextSong.art" alt="Album Art" class="w-full h-full object-cover" />
              </div>
              <div>
                <span class="text-gray-300 font-semibold text-sm">{{ nextSong.title }}</span>
                <span class="text-gray-400 text-xs block">{{ nextSong.artist }}</span>
              </div>
            </div>
            <div v-else class="text-gray-600 text-sm">Advertisement</div>
          </div>
        </div>
      </div>
    </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>