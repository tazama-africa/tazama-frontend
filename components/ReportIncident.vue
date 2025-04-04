<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'

const open = ref(false)
const selectedIssue = ref('')
const reportDetails = ref('')
const matatuPhoneNumber = ref('+254712345678')
const { copy, copied } = useClipboard({ source: matatuPhoneNumber })

const issues = [
    'Reckless Driving',
    'Overcharging Fares',
    'Verbal/Physical Harassment',
    'Overloading Passengers',
    'Loud Music',
    'Poor Vehicle Condition',
    'Theft or Pickpocketing',
    'Other'
]

// Function to close modal on backdrop click
const closeModal = () => {
    open.value = false
}
</script>

<template>
    <div class="relative">
        <!-- Open Modal Button -->
        <!-- <button @click="open = true" class="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700">
            Report Issue
        </button> -->
        <button @click="open = true"
            class="flex items-center gap-1   hover:bg-red-600 hover:text-white ml-2 px-6 lg:px-10 py-2 border rounded-full text-orange-50 ">
            <div target="blank" class="text-xs">
                Report
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M1.5 4.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 0 1-1.75 1.75h-9.586a.25.25 0 0 0-.177.073l-3.5 3.5A1.458 1.458 0 0 1 5 21.043V18.5H3.25a1.75 1.75 0 0 1-1.75-1.75ZM3.25 4a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 .75.75v3.19l3.427-3.427A1.75 1.75 0 0 1 11.164 17h9.586a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25ZM12 6a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 12 6m0 9a1 1 0 1 1 0-2a1 1 0 0 1 0 2" />
                </svg>
            </div>
        </button>

        <!-- Modal Backdrop & Container -->
        <transition name="fade">
            <div v-if="open" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
                @click.self="closeModal">
                <!-- Modal Content -->
                <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
                    <!-- Modal Title -->
                    <h2 class="text-lg font-semibold text-gray-800">Report an Issue</h2>
                    <p class="text-sm text-gray-600 mb-4">Help improve safety and service by reporting incidents.</p>

                    <!-- Issue Selection -->
                    <div class="mb-4">
                        <label class="block text-sm text-left font-medium text-gray-700">Select Issue</label>
                        <select v-model="selectedIssue"
                            class="w-full mt-1 p-2 border text-xs text-gray-700 bg-white border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500">
                            <option disabled value="">Select an issue...</option>
                            <option v-for="issue in issues" :key="issue" :value="issue">{{ issue }}</option>
                        </select>
                    </div>

                    <!-- Description Box -->
                    <div class="mb-4">
                        <label class="block text-sm  text-left font-medium text-gray-700">Details</label>
                        <textarea v-model="reportDetails"
                            class="w-full mt-1 text-gray-700 p-2 border placeholder:text-sm text-sm border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                            placeholder="Describe the issue..."></textarea>
                    </div>

                    <!-- Copyable Phone Number -->
                    <div>
                        <label class="block text-sm pb-1 text-left font-medium text-gray-700">Hotline
                            Contact</label>


                        <div class="flex items-center justify-between w-full bg-orange-200 rounded-full">
                            <input v-model="matatuPhoneNumber" readonly
                                class="text-sm bg-orange-200 text-gray-900 px-3 py-2  rounded-l-full w-32 cursor-not-allowed">
                            <button @click="copy()"
                                class="text-xs flex hover:bg-red-600 gap-2 hover:text-white bg-orange-300 px-3 py-2  rounded-full text-orange-600">
                                <div>
                                    {{ copied ? "Copied!" : "Copy" }}
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 24 24">
                                        <g fill="none" stroke="currentColor" stroke-width="1.5">
                                            <path
                                                d="M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z" />
                                            <path
                                                d="M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h4a3 3 0 0 1 3 3"
                                                opacity="0.5" />
                                        </g>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>


                    <!-- Buttons -->
                    <div class="flex text-sm justify-end mt-4 space-x-2">
                        <button @click="closeModal"
                            class="px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded-full hover:bg-gray-400">
                            Cancel
                        </button>
                        <button @click="closeModal"
                            class="px-4 py-2 text-sm  bg-orange-600 text-white rounded-full hover:bg-red-700">
                            Submit Report
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
/* Fade Animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
