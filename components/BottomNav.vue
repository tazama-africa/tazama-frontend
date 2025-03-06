<script setup>
import { useRoute } from 'vue-router';
// import { Home, Search, User } from 'lucide-vue-next';

const route = useRoute();
</script>

<template>
  <nav class="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-300 lg:hidden">
    <div class="flex justify-around py-3">
      <!-- Home -->
      <NuxtLink to="/dashboard" class="flex flex-col items-center text-gray-500" :class="{ 'text-orange-500 font-bold': route.path === '/dashboard' || route.path === '/player/jam-music'  }">
        <!-- <Home class="w-6 h-6" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"  viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z"/><path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21"/></g></svg>
        <span class="text-xs">Home</span>
      </NuxtLink>

      <!-- Search -->
      <NuxtLink to="/search" class="flex flex-col items-center text-gray-500" :class="{ 'text-orange-500 font-bold': route.path === '/search' }">
        <!-- <Search class="w-6 h-6" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21l-3.5-3.5M17 10a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z"/></svg>
        <span class="text-xs">Search</span>
      </NuxtLink>

      <!-- Profile -->
      <NuxtLink to="/profile" class="flex flex-col items-center text-gray-500" :class="{ 'text-orange-500 font-bold': route.path === '/profile' }">
        <!-- <User class="w-6 h-6" /> -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"  viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21 12a8.96 8.96 0 0 1-1.526 5.016A8.99 8.99 0 0 1 12 21a8.99 8.99 0 0 1-7.474-3.984A9 9 0 1 1 21 12Z"/><path fill="currentColor" d="M13.25 9c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 9zM12 10.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 11.75zM10.75 9c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 9zM12 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 6.25zM5.166 17.856l-.719-.214l-.117.392l.267.31zm13.668 0l.57.489l.266-.31l-.117-.393zM9 15.75h6v-1.5H9zm0-1.5a4.75 4.75 0 0 0-4.553 3.392l1.438.428A3.25 3.25 0 0 1 9 15.75zm3 6a8.23 8.23 0 0 1-6.265-2.882l-1.138.977A9.73 9.73 0 0 0 12 21.75zm3-4.5c1.47 0 2.715.978 3.115 2.32l1.438-.428A4.75 4.75 0 0 0 15 14.25zm3.265 1.618A8.23 8.23 0 0 1 12 20.25v1.5a9.73 9.73 0 0 0 7.403-3.405z"/></g></svg>
        <span class="text-xs">Profile</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
nav a {
  transition: color 0.2s ease-in-out;
}
</style>
