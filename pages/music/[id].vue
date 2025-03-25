<template>
  <div class="player-container bg-gradient-to-r from-gray-900 to-slate-800">
    <div class="flex h-screen gap-4 lg:p-10 rounded-full">
      <!-- Player Section (2/3 width, 4/5 height) -->
      <div class="player-section border-none" v-show="!showAd">
        <div id="player"></div>
      </div>
      <!-- Song Info Section (1/3 width) -->
      <div class="song-info-section space-y-4">
        <div class="flex items-center justify-center w-full">
          <div
            class="flex flex-col items-center justify-center  p-2 gap-2 mb-5  cursor-pointer   rounded-lg text-orange-600 text-2xl group">
            <NuxtImg src="/logo-block-t.png" class="lg:w-full w-[100%] h-44 object-cover" />

          </div>
        </div>
        <div class=" h-[40vh] p-4 glassmorphic-bg">
          <h3 class='text-white text-xl border-b pb-1 mb-4  font-bold'>Vehicle information</h3>
          <div>
            <a href="#"
              class="flex flex-col gap-1 items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100">
              <div class='w-2/5 h-[100%] flex flex-col items-center justify-between'>
                <div class="items-center rounded-xl justify-center">
                  <img class="object-cover w-full rounded-xl h-[100%] mt-1  md:w-[95%]  "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQMJV521Kj_D6VHlE-NuNiRBnEKNiwWgtFQ&s"
                    alt="">
                </div>
                <div
                  class='bg-blue-100 flex gap-3 px-4 font-bold text-xl mt-4 text-center rounded-lg py-1.5 text-blue-600 border border-blue-600 w-full'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 p-2 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full text-white "
                      viewBox="0 0 48 48">
                      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="4">
                        <path
                          d="M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m2 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12m28 2a6 6 0 1 0 0-12a6 6 0 0 0 0 12M22 28a8 8 0 1 0 0-16a8 8 0 0 0 0 16m12-16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                          clip-rule="evenodd" />
                        <path d="m11 11l4 4m15-3l-2 2m6 19.5L28 26m-14 5l4-4" />
                      </g>
                    </svg>
                  </div>
                  <div>
                    Code: 2020
                  </div>
                </div>
              </div>
              <div class="flex w-3/5 flex-col justify-between  px-0 leading-normal">
                <h5 class="mb-2 pt-2 text-2xl  font-bold tracking-tight text-gray-800 e">Vehicle</h5>
                <div class="space-y-1">
                  <div class="flex  items-center gap-2 ">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 p-2 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full text-white "
                        viewBox="0 0 48 48">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="4">
                          <path
                            d="M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m2 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12m28 2a6 6 0 1 0 0-12a6 6 0 0 0 0 12M22 28a8 8 0 1 0 0-16a8 8 0 0 0 0 16m12-16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                            clip-rule="evenodd" />
                          <path d="m11 11l4 4m15-3l-2 2m6 19.5L28 26m-14 5l4-4" />
                        </g>
                      </svg>
                    </div>
                    <div>
                      Fleet No: 2020
                    </div>
                  </div>
                  <div class="flex  items-center gap-2 ">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 p-2 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full text-white "
                        viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"
                          d="M15 4.001c3.114.01 4.765.108 5.828 1.17C22 6.344 22 8.23 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828C4.235 4.109 5.886 4.01 9 4m3 1V3m-4 7.5h8M8 14h5.5" />
                      </svg>
                    </div>
                    <div>
                      Number Plate: KDB 405K
                    </div>
                  </div>
                  <div
                    class='bg-gradient-to-r from-white border border-green-600 px-4 to-green-50  flex items-center justify-between gap-2 font-bold text-xl text-center rounded-lg py-2 w-full'>
                    <div>
                      <NuxtImg class="h-6 w-full object-cover"
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrH1KxwroA7vstcstBRdJvy5WwNZ0pYnZAQ&s'
                        alt='' />

                    </div>
                    <div class=' text-green-800 font-bold text-xl'>
                      0729091999
                    </div>
                  </div>
                </div>
              </div>
            </a>

          </div>
          <div class="mt-4">
            <a href="#"
              class="flex flex-col gap-1 items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100">
              <div class='w-2/5 h-[100%] flex flex-col items-center justify-between'>
                <div class="items-center rounded-xl justify-center">
                  <img class="object-cover w-full rounded-xl h-[100%] mt-1  md:w-[95%]  "
                    src="https://i0.wp.com/morethanuseless.com/wp-content/uploads/2024/05/location.jpg?ssl=1" alt="">
                </div>
              </div>
              <div class="flex w-3/5 flex-col justify-between  px-0 leading-normal">
                <h5 class="mb-2 pt-2 text-2xl  font-bold tracking-tight text-gray-800 e">Location</h5>
                <div class="space-y-1">
                  <div class="flex  items-center gap-2 ">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 p-1 bg-gradient-to-r from-orange-500 to-orange-800 rounded-full text-white "
                        viewBox="0 0 25 25">
                        <path fill="currentColor" d="M5.504 4.632a.9.9 0 1 0 0 1.8h.008a.9.9 0 0 0 0-1.8z" />
                        <path fill="currentColor" fill-rule="evenodd"
                          d="m5.16 10.408l.351-.436l-.471.584a.75.75 0 0 0 .943-.001l-.472-.583l.247.305l.365.45l-.296-.365l.156.193h.001l.001-.002l.003-.002l.008-.007l.026-.021l.09-.078A9.5 9.5 0 0 0 7.326 9.13c.65-.856 1.37-2.127 1.37-3.598a3.192 3.192 0 1 0-6.383 0c0 1.472.724 2.743 1.378 3.6a9.5 9.5 0 0 0 1.22 1.314l.09.078l.026.022l.008.006l.003.003h.001l.001.001l.08-.1l-.218.27zM3.812 5.532a1.692 1.692 0 1 1 3.385 0c0 .994-.498 1.943-1.066 2.691a8 8 0 0 1-.621.723a8 8 0 0 1-.627-.725c-.57-.747-1.07-1.697-1.07-2.69"
                          clip-rule="evenodd" />
                        <path fill="currentColor" d="M19.12 16.25a.9.9 0 1 0 0 1.8h.008a.9.9 0 0 0 0-1.8z" />
                        <path fill="currentColor" fill-rule="evenodd"
                          d="m18.656 22.173l.471-.583za.75.75 0 0 0 .944-.001l-.473-.582l.473.582l.002-.002l.002-.002l.008-.006l.027-.022l.09-.078a9.5 9.5 0 0 0 1.214-1.315c.65-.856 1.37-2.127 1.37-3.598a3.192 3.192 0 1 0-6.384 0c0 1.473.724 2.743 1.378 3.6a9.5 9.5 0 0 0 1.22 1.314l.09.078l.026.022l.009.006l.002.003zm-1.227-5.024a1.692 1.692 0 0 1 3.384 0c0 .994-.498 1.944-1.065 2.691a8 8 0 0 1-.622.723a8 8 0 0 1-.627-.724c-.57-.748-1.07-1.697-1.07-2.69"
                          clip-rule="evenodd" />
                        <path fill="currentColor"
                          d="M7.95 10.727h2.76a2.153 2.153 0 1 1 0 4.306H5.97a3.653 3.653 0 0 0 0 7.307h10.652c-.18-.2-.372-.428-.566-.681a10 10 0 0 1-.563-.82H5.97a2.153 2.153 0 0 1 0-4.306h4.74a3.653 3.653 0 1 0 0-7.307H9.075a10 10 0 0 1-.555.81c-.195.258-.39.489-.57.69" />
                      </svg>
                    </div>
                    <div>
                      Route: Nairobi - Thika
                    </div>
                  </div>
                  <div class="flex  items-center gap-2 ">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 p-1 bg-gradient-to-r from-orange-500 to-orange-800 rounded-full text-white "
                        viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="0" fill="currentColor">
                          <animate fill="freeze" attributeName="r" begin="0.7s" dur="0.2s" values="0;4" />
                        </circle>
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2">
                          <path stroke-dasharray="56" stroke-dashoffset="56"
                            d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8Z">
                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0" />
                          </path>
                          <path stroke-dasharray="4" stroke-dashoffset="4" d="M12 4v0M20 12h0M12 20v0M4 12h0"
                            opacity="0">
                            <animate fill="freeze" attributeName="d" begin="1s" dur="0.2s"
                              values="M12 4v0M20 12h0M12 20v0M4 12h0;M12 4v-2M20 12h2M12 20v2M4 12h-2" />
                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s"
                              values="4;0" />
                            <set fill="freeze" attributeName="opacity" begin="1s" to="1" />
                            <animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate"
                              values="0 12 12;360 12 12" />
                          </path>
                        </g>
                      </svg>
                    </div>
                    <div>
                      Current Location: Kimbo
                    </div>
                  </div>
                  <div
                    class='bg-gradient-to-r from-white border border-orange-600 px-4 to-orange-50  flex items-center justify-between gap-2 font-bold text-xl text-center rounded-lg py-1 w-full'>
                    <div class='flex gap-2'>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class='h-8' viewBox="0 0 72 72">
                          <circle cx="35.905" cy="36.014" r="27.035" fill="#fcea2b" />
                          <circle cx="36.006" cy="36.037" r="21.871" fill="#fff" />
                          <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M55.11 25.38a21.863 21.863 0 1 1-8.095-8.245" />
                          <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M62.94 35.997a27.046 27.046 0 1 1-5.266-16.038" />
                          <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"
                            d="m47.394 21.578l11.038-1.16l-1.16-11.038m-7.297 26.974H35.891V18.52m0 35.391v-3.845M21.143 36.354h-3.057h0" />
                          <circle cx="35.891" cy="36.354" r="3.737" />
                          <circle cx="48.694" cy="47.937" r="1.48" />
                          <circle cx="23.087" cy="24.717" r="1.48" />
                          <circle cx="23.087" cy="47.937" r="1.48" />
                        </svg>
                      </div>
                      <div>
                        Time
                      </div>
                    </div>
                    <div class=' text-green-800 font-bold text-xl'>
                      5.49 P.M
                    </div>
                  </div>
                </div>
              </div>
            </a>

          </div>


        </div>



        <div class="h-60 rounded-2xl bg-gradient-to-r from-slate-700  to-slate-900  overflow-hidden shadow-lg">
          <div class="p-4 bg-gradient-to-l from-gray-900 to-black relative">
            <h3 class="text-white text-xl font-bold tracking-wide">Playing now</h3>
            <div v-if="currentSong" class="song-details flex items-center mt-2">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-600  to-blue-900 rounded-md mr-3 overflow-hidden">
                <!-- Placeholder for album art -->
                <NuxtImg src="/logo-icon.png" alt="Advertisement" class="h-14 w-14 object-cover" />
                <img v-if="currentSong.art" :src="currentSong.art" alt="Album Art" class="w-full h-full object-cover" />
              </div>
              <div>
                <span class="  text-white  font-semibold text-sm block">{{ currentSong.title }}</span>
                <span class=" text-gray-400 text-xs">{{ currentSong.artist }}</span>
              </div>
            </div>
            <div v-else class="no-song text-gray-500 italic">Advertisement</div>
            <!-- Progress bar inspired by Porsche sleekness -->
            <div class="progress-bar w-full h-1 bg-gray-700 mt-3 rounded-full overflow-hidden">
              <div class="progress h-full bg-orange-500" :style="{ width: progressWidth + '%' }"></div>
            </div>
          </div>
          <div class=" p-4 py-2 ">
            <h3 class="text-white text-lg font-semibold tracking-wide opacity-80">Up next</h3>
            <div v-if="nextSong" class="song-details flex items-center mt-2">
              <div class="w-8 h-8 bg-gradient-to-r from-blue-600  to-blue-800 rounded-md mr-2 overflow-hidden">
                <img v-if="nextSong.art" :src="nextSong.art" alt="Album Art" class="w-full h-full object-cover" />
              </div>
              <div class='flex flex-col'>
                <span class="text-gray-300  font-semibold text-sm">{{ nextSong.title }}</span>
                <span class=" text-gray-400  text-xs">{{ nextSong.artist }}</span>
              </div>
            </div>
            <div v-else class="no-song text-gray-600 text-sm">Advertisement</div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div v-if="showAd" class="ad-container">
    <NuxtImg src="/logo-block-t.png" alt="Advertisement" class="h-40 object-cover" />
  </div>
</template>


<script>
export default {
  name: 'YouTubePlayer',
  data() {
    return {
      player: null,
      currentSong: null,
      nextSong: null,
      showPopup: false,
      showAd: false,
      sessionId: null, // Will be set dynamically from route
      apiUrl: null,    // Will be constructed dynamically
      progressWidth: 0,
      progressInterval: null
    }
  },
  created() {
    console.log('Full route object:', this.$route)
    console.log('Route params:', this.$route.params)
    this.sessionId = this.$route.params.id || '2020'
    console.log('Selected sessionId:', this.sessionId)
    // this.apiUrl = `http://127.0.0.1:8000/api/sessions/${this.sessionId}/now-and-next/`
    this.apiUrl = `https:////tazama.africa/api/sessions/${this.sessionId}/now-and-next/`
    console.log('API URL:', this.apiUrl)
  },
  mounted() {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = this.initializePlayer
  },
  beforeDestroy() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval)
    }
  },
  watch: {
    // Watch for route changes to update sessionId and apiUrl
    '$route.params.sessionId'(newSessionId) {
      this.sessionId = newSessionId || '2020'
      this.apiUrl = `http://127.0.0.1:8000/api/sessions/${this.sessionId}/now-and-next/`
      this.initializePlayer() // Re-initialize player with new session
    }
  },
  methods: {
    async initializePlayer() {
      await this.fetchSongs()
      this.handleCurrentSong()
    },
    async fetchSongs() {
      try {
        const response = await fetch(this.apiUrl, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const data = await response.json()
        this.currentSong = data.playing_now
        this.nextSong = data.playing_next
      } catch (error) {
        console.error('Error fetching songs:', error)
      }
    },
    async advanceSong() {
      try {
        const response = await fetch(this.apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        })
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const data = await response.json()
        this.currentSong = data.playing_now
        this.nextSong = data.playing_next
        this.handleCurrentSong()
      } catch (error) {
        console.error('Error advancing song:', error)
      }
    },
    handleCurrentSong() {
      if (this.currentSong === null) {
        this.showAd = true
        if (this.player) this.player.pauseVideo()
        setTimeout(() => {
          this.showAd = false
          this.advanceSong()
        }, 5000)
      } else if (this.currentSong?.audio_file) {
        if (!this.player) {
          const videoId = this.extractVideoId(this.currentSong.audio_file)
          this.player = new window.YT.Player('player', {
            height: '100%',
            width: '100%',
            videoId,
            events: {
              onReady: this.onPlayerReady,
              onStateChange: this.onPlayerStateChange,
              onError: this.onPlayerError
            }
          })
        } else {
          const videoId = this.extractVideoId(this.currentSong.audio_file)
          this.player.loadVideoById(videoId)
        }
      }
    },
    extractVideoId(url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
      const match = url.match(regExp)
      return (match && match[2].length === 11) ? match[2] : null
    },
    onPlayerReady(event) {
      event.target.playVideo()
      this.showSongPopup()
      this.startProgressUpdate()
    },
    onPlayerStateChange(event) {
      if (event.data === window.YT.PlayerState.ENDED) {
        this.advanceSong()
        this.stopProgressUpdate()
      }
      if (event.data === window.YT.PlayerState.PLAYING) {
        this.showSongPopup()
        this.startProgressUpdate()
      }
      if (event.data === window.YT.PlayerState.PAUSED) {
        this.stopProgressUpdate()
      }
    },
    onPlayerError(event) {
      console.error('Player error:', event.data)
      this.advanceSong()
    },
    showSongPopup() {
      this.showPopup = true
      setTimeout(() => {
        this.showPopup = false
      }, 8000)
    },
    startProgressUpdate() {
      if (this.progressInterval) {
        clearInterval(this.progressInterval)
      }
      this.progressInterval = setInterval(() => {
        if (this.player && this.player.getCurrentTime && this.player.getDuration) {
          const currentTime = this.player.getCurrentTime()
          const duration = this.player.getDuration()
          if (duration > 0) {
            this.progressWidth = (currentTime / duration) * 100
          }
        }
      }, 500)
    },
    stopProgressUpdate() {
      if (this.progressInterval) {
        clearInterval(this.progressInterval)
        this.progressInterval = null
      }
      this.progressWidth = 0
    }
  }
}
</script>


<style scoped>
.player-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.glassmorphic-bg {
  background: rgba(255, 255, 255, 0.19);
  /* More transparency */
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 16px 0px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.main-layout {
  display: flex;
  height: 100%;
  /* 4/5 of height */
}

.player-section {
  width: 66.66%;
  /* 2/3 of width */
  height: 100%;
  position: relative;
}

#player {
  width: 100%;
  height: 100%;
}

.ad-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
}



@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.song-info-section {
  width: 33.33%;
  /* 1/3 of width */
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
}



.next-song {
  flex: 1;
  padding-top: 10px;
  border-radius: 16px 0px;

}

.song-details {
  margin-top: 10px;
}

.song-title {
  font-size: 1.25rem;
  font-weight: bold;
  display: block;
}

.song-artist {
  font-size: 1rem;
  opacity: 0.9;
  display: block;
}

.no-song {
  font-style: italic;
  color: #666;
  margin-top: 10px;
}
</style>