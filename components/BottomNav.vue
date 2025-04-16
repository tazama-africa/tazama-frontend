<script setup>
import { useRoute } from 'vue-router';
// import { Home, Search, User } from 'lucide-vue-next';

const route = useRoute();
console.log(route)
console.log(route.params.path)
</script>

<template>
  <nav style="background-color: #212121;"
    class="fixed bottom-0 left-0 w-full    shadow-md border-t border-gray-500 lg:hidden">
    <div class="flex justify-around py-1.5">
      <!-- Home -->
      <NuxtLink to="/" class="flex flex-col items-center text-gray-200"
        :class="{ 'text-orange-500 font-bold': route.path === '/' || route.path === '/player/jam-music' || route.path === '/dashboard' }">
        <!-- <Home class="w-6 h-6" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
            <path
              d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z" />
            <path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21" />
          </g>
        </svg>
        <span class="text-xs" style="font-size: 10px">Home</span>
      </NuxtLink>

      <!-- player -->
      <NuxtLink to="/player" class="flex flex-col items-center text-gray-100"
        :class="{ 'text-orange-500 font-bold':  route.path === '/player' }">
        <!-- <Home class="w-6 h-6" /> -->
        <svg xmlns="http://www.w3.org/2000/svg"  class="w-7 h-7 -my-1"  
        
        viewBox="0 0 48 48">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
            d="M37.555 33.151H18.41a2.156 2.156 0 0 1-2.059-2.795l4.344-13.99a2.16 2.16 0 0 1 2.059-1.517h19.195a2.156 2.156 0 0 1 2.057 2.802l-4.394 13.99a2.16 2.16 0 0 1-2.057 1.51"
            stroke-width="1" />
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
            d="m27.64 18.45l-2.695 9.15a.536.536 0 0 0 .723.645l9.673-4.095a.536.536 0 0 0 .105-.928l-6.977-5.055a.536.536 0 0 0-.83.283ZM7.957 24h7.45m-9.366 6.794h7.4m-9.547-3.27h7.284"
            stroke-width="1" />
        </svg> <span class="text-xs" style="font-size: 10px">Player</span>
      </NuxtLink>

      <!-- Search -->
      <NuxtLink to="/search" class="flex flex-col hidden items-center text-gray-200"
        :class="{ 'text-orange-500 font-bold': route.path === '/search' }">
        <!-- <Search class="w-6 h-6" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"
            d="m21 21l-3.5-3.5M17 10a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z" />
        </svg>
        <span class="text-xs text-center" style="font-size: 10px">Search</span>
      </NuxtLink>

      <!-- Profile -->
      <NuxtLink to="/profile" class="flex flex-col items-center text-gray-200"
        :class="{ 'text-orange-500 font-bold': route.path === '/profile' }">
        <!-- <User class="w-6 h-6" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
          <g fill="none">
            <path stroke="currentColor" stroke-width="1.5"
              d="M21 12a8.96 8.96 0 0 1-1.526 5.016A8.99 8.99 0 0 1 12 21a8.99 8.99 0 0 1-7.474-3.984A9 9 0 1 1 21 12Z" />
            <path fill="currentColor"
              d="M13.25 9c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 9zM12 10.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 11.75zM10.75 9c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 9zM12 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 6.25zM5.166 17.856l-.719-.214l-.117.392l.267.31zm13.668 0l.57.489l.266-.31l-.117-.393zM9 15.75h6v-1.5H9zm0-1.5a4.75 4.75 0 0 0-4.553 3.392l1.438.428A3.25 3.25 0 0 1 9 15.75zm3 6a8.23 8.23 0 0 1-6.265-2.882l-1.138.977A9.73 9.73 0 0 0 12 21.75zm3-4.5c1.47 0 2.715.978 3.115 2.32l1.438-.428A4.75 4.75 0 0 0 15 14.25zm3.265 1.618A8.23 8.23 0 0 1 12 20.25v1.5a9.73 9.73 0 0 0 7.403-3.405z" />
          </g>
        </svg>
        <span class="text-xs" style="font-size: 10px">Profile</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
nav a {
  transition: color 0.2s ease-in-out;
}
</style>
