<script setup lang="ts">
import { ref, watch } from 'vue'

const people = [
  { id: 1, label: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb' },
  { id: 4, label: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt' },
  { id: 7, label: 'Caroline Schultz' },
  { id: 8, label: 'Mason Heaney' },
  { id: 9, label: 'Claudie Smitham' },
  { id: 10, label: 'Emil Schaefer' }
]

const selected = ref([people[3]])
const isOpen = ref(false)
const searchQuery = ref('')

// Function to open the command palette
const openCommandPalette = () => {
  isOpen.value = true
  // Focus the search input when command palette opens
  setTimeout(() => {
    document.querySelector('.command-palette-input')?.focus()
  }, 100)
}

// Function to close the command palette
const closeCommandPalette = () => {
  isOpen.value = false
  searchQuery.value = ''
}

// Function to handle click outside
const handleClickOutside = (event: MouseEvent) => {
  const palette = document.querySelector('.command-palette-container')
  const searchInput = document.querySelector('.search-input')
  
  if (palette && !palette.contains(event.target as Node) && 
      searchInput && !searchInput.contains(event.target as Node)) {
    closeCommandPalette()
  }
}

// Add event listener when component is mounted
onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

// Remove event listener when component is unmounted
onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})

// Reset search query when command palette closes
watch(isOpen, (newValue) => {
  if (!newValue) {
    searchQuery.value = ''
  }
})
</script>

<template>
  <div class="relative">
    <!-- Search Input -->
    <div class="search-input mb-4">
      <label for="search" class="block text-sm font-medium text-gray-700">Search</label>
      <div class="mt-1">
        <input
          type="text"
          id="search"
          name="search"
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          placeholder="Click to search..."
          @click="openCommandPalette"
          v-model="searchQuery"
          readonly
        />
      </div>
    </div>

    <!-- Command Palette -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div v-if="isOpen" class="command-palette-container absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
        <div class="max-h-60 overflow-auto rounded-md py-1 text-base sm:text-sm">
          <div class="sticky top-0 z-10 bg-white p-2 border-b">
            <input
              type="text"
              class="command-palette-input w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              placeholder="Type to search..."
              v-model="searchQuery"
              autofocus
            />
          </div>
          
          <UCommandPalette
            v-model="selected"
            multiple
            nullable
            :autoselect="false"
            :groups="[{ key: 'people', commands: people }]"
            :fuse="{ resultLimit: 6, fuseOptions: { threshold: 0.1 } }"
            :query="searchQuery"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>