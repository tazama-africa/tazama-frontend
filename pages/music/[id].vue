<template>
  <div class="player-container relative w-screen h-screen bg-gradient-to-r from-gray-800 to-slate-800">
    <!-- Player Section - Full Screen -->
    <div class="player-section absolute inset-0 w-full h-full" v-show="!showAd">
      <div id="player" class="w-full h-full"></div>
    </div>


    <!-- Overlay Container for Song Info - Positioned on top -->
    <div class="overlay-container absolute inset-0 w-full h-full  z-10">
      <div class='flex flex-col justify-between w-full h-full'>
        <!-- top part -->
        <div class="flex justify-between">
          <div></div>
          <div>
            <div class="p-2 cursor-pointer rounded-lg text-orange-600 text-2xl">
              <NuxtImg src="/logo-block-t.png" class="h-32 object-cover" />
            </div>
          </div>
        </div>
        <!-- bottom part -->
        <div class="w-full flex font-[sans] flex-col items-center justify-center">
          <div class="flex w-[90%]">
            <div class="flex flex-col flex-grow">
              <div class="w-96 rounded-t-xl px-10 bg-blue-600 text-white font-bold text-4xl text-center py-3">
                Code : {{ sessionId }}
              </div>
              <div class="bg-white pb-0 h-20 flex-grow flex flex-col justify-between  font-semibold">
                <div class="flex pt-2 px-10 items-center justify-between ">
                  <div class="flex">
                    <div class="flex gap-3">
                      <div class="p-2  cursor-pointer">
                        <NuxtImg src="/play-now.gif" class="h-12 object-cover" />
                      </div>
                    </div>
                    <div class="flex pl-4 pt-2 items-center">
                      <div class=' text-2xl'>
                        {{ currentSong?.title || 'Song Title' }} - &nbsp
                      </div>
                      <div>
                        <span class="text-lg text-gray-600">{{ currentSong?.artist || 'Artist Name' }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50">
                    <button @click="advanceSong" class="next-song-btn text-blue-600">Next Song</button>
                    <div class='text-sm'>
                      {{ nextSong?.title || 'Song Title' }}
                    </div>
                  </div>
                </div>
                <div class="progress-bar w-full h-1 bg-gray-700   overflow-hidden">
                  <div class="progress h-full bg-orange-500" :style="{ width: progressWidth + '%' }"></div>
                </div>
              </div>
            </div>
            <div class="flex  g items-center">
              <div class="p-2  cursor-pointer">
                <NuxtImg src="/logo-block-t.png" class="h-24 object-cover" />
              </div>
            </div>
          </div>
          <div class="bg-white text-lg font-bold items-center px-24 py-0 w-full h-12  flex justify-between">
            <div class="flex">
              <div class='bg-black text-white p-4 text-center'>
                Route
              </div>
              <div class="flex items-center p-4">
                <div class="text-center text-gray-800">
                Nairobi - Thika
              </div>
              </div>
            </div>
            <div class="flex">
              <div class='bg-black text-white p-4 text-center'>
                Time
              </div>
              <div class="flex items-center p-4">
                <div class="text-center text-gray-800">
                2.35 pm
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ad Overlay -->
    <div v-if="showAd"
      class="ad-container absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 z-20">
      <NuxtImg src="/logo-block-t.png" alt="Advertisement" class="h-40 object-cover" />
    </div>
  </div>
</template>


<style scoped>
.glassmorphic-bg {
  background: rgba(255, 255, 255, 0.19);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

/* Ensure the player iframe takes full space */
#player {
  width: 100%;
  height: 100%;
}
</style>

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
      sessionId: null,
      apiUrl: null,
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
    this.apiUrl = `https://tazama.africa/api/sessions/${this.sessionId}/now-and-next/`
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
    '$route.params.sessionId'(newSessionId) {
      this.sessionId = newSessionId || '2020'
      // this.apiUrl = `http://127.0.0.1:8000/api/sessions/${this.sessionId}/now-and-next/`
      this.apiUrl = `https://tazama.africa/api/sessions/${this.sessionId}/now-and-next/`
      this.initializePlayer()
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
            playerVars: {
              playbackRate: 1.05 // Set initial playback speed to 1.3x
            },
            events: {
              onReady: this.onPlayerReady,
              onStateChange: this.onPlayerStateChange,
              onError: this.onPlayerError
            }
          })
        } else {
          const videoId = this.extractVideoId(this.currentSong.audio_file)
          this.player.loadVideoById(videoId)
          this.player.setPlaybackRate(1.0) // Ensure playback rate is set when loading new video
        }
      }
    },
    extractVideoId(url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
      const match = url.match(regExp)
      return (match && match[2].length === 11) ? match[2] : null
    },
    onPlayerReady(event) {
      event.target.setPlaybackRate(1.0) // Ensure playback rate is applied
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
            // Check if 5 seconds remain (adjusted for 1.3x speed)
            const adjustedDuration = duration / 1.1 // Duration in real time
            const adjustedCurrentTime = currentTime / 1.1 // Current time in real time
            if (adjustedDuration - adjustedCurrentTime <= 5) {
              this.advanceSong()
              this.player.seekTo(2) // Seek 5 seconds into the next song
              clearInterval(this.progressInterval)
              this.startProgressUpdate() // Restart progress for the new song
            }
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
