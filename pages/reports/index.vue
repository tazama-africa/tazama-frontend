<template>
    <div class="min-h-screen flex flex-col">
        <!-- Top Navigation -->
        <div class="fixed top-0 left-0 w-full h-[13vh] bg-cover bg-center overflow-x-hidden z-10"
            style="background-image: url('/report.jpg');">
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 via-60% to-transparent opacity-80">
            </div>

            <!-- Header Section -->
            <div
                class="lg:bg-white bg-transparent relative pt-4 w-full h-10 flex justify-between items-center text-sm lg:px-2 lg:rounded-full z-20">
                <div class="flex gap-1">
                    <nuxt-link to="/" class="flex gap-2 items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 pl-4" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1" />
                        </svg>
                    </nuxt-link>
                </div>
                <div class="flex gap-4 items-center py-2 pr-4">

                    <nuxt-link to="/profile"
                        class="flex items-center justify-center w-6 h-6 text-xs overflow-hidden bg-blue-500 text-white rounded-full">
                        <span>
                            <UserProfile />
                        </span>
                    </nuxt-link>
                </div>
            </div>

            <div class="pl-5 mt-3 font-bold text-white text-xl absolute bottom-2">
                <div>
                    Reports
                </div>
                <p class="text-xs text-gray-300 font-normal mt-1">
                    Get a deeper insight into your activity
                </p>
            </div>

        </div>

        <!-- List of Trips -->
        <div class="mt-[13vh] px-2 pb-4 flex-grow overflow-y-auto">

            <div class="relative mt-1">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input v-model="reportStore.searchQuery" type="text" placeholder="Search issue,   fleet no..."
                    class="block w-full p-4 py-2 ps-10 text-sm text-gray-50 border border-gray-600 rounded-2xl focus:ring-blue-500 focus:border-blue-500 bg-slate-800" />
                <button type="submit"
                    class="text-white absolute end-1.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 ">Search</button>
            </div>

            <div class="flex text-sm justify-between items-center mt-3 pl-2">
                <div>
                    Filter
                </div>
                <div>
                    <select v-model="reportStore.dateFilter" class="p-2 px-4 text-xs rounded-xl">
                        <option value="all">All</option>
                        <option value="yesterday">Yesterday</option>
                        <option value="last7days">Last 7 Days</option>
                        <option value="lastMonth">Last Month</option>
                    </select>
                </div>
            </div>
            <div v-for="(trip, index) in reportStore.filteredReports" :key="trip.id"
                class="border-b border-slate-900 shadow-sm mb-4">
                <div class="flex items-center justify-between p-4 cursor-pointer" @click="toggleTrip(index)">
                    <div class="flex items-center space-x-4">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                            {{ trip.firstDigit }}
                        </div>
                        <div>
                            <h3 class="text-sm font-semibold">{{ trip.fleetNo }}</h3>
                            <p class="text-xs text-gray-500">{{ formatDate(trip.createdAt) }}</p>
                        </div>
                    </div>
                    <button class="focus:outline-none">
                        <svg class="w-6 h-6 transform transition-transform"
                            :class="{ 'rotate-180': openTrip === index }" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                <div v-if="openTrip === index" class="p-4 bg-slate-900 rounded-2xl text-white">
                    <div class="grid px-3 grid-cols-1 md:grid-cols-2 gap-4">
                        <ol
                            class="relative text-xs text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                            <li class="mb-5 ms-6">
                                <span
                                    class="absolute flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full -start-4 ring-4 ring-gray-900">
                                    <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path
                                            d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                                    </svg>
                                </span>
                                <h3 class="font-medium leading-tight text-gray-50">Vehicle Info</h3>
                                <p class="text-xs">KBX | {{ trip.fleetNo }}</p>
                            </li>
                            <li class="mb-5 ms-6">
                                <span
                                    class="absolute flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full -start-4 ring-4 ring-gray-900">
                                    <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path
                                            d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                    </svg>
                                </span>
                                <h3 class="font-medium leading-tight text-gray-50">Report Issue</h3>
                                <p class="text-xs">{{ trip.issue }}</p>
                            </li>
                            <li class="ms-6">
                                <span
                                    class="absolute flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full -start-4 ring-4 ring-gray-900">
                                    <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path
                                            d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                                    </svg>
                                </span>
                                <h3 class="font-medium leading-tight text-gray-50">Message</h3>
                                <p class="text-xs">{{ trip.details }}</p>
                            </li>
                        </ol>
                    </div>
                    <div class="flex items-end w-full justify-between">
                        <div></div>
                        <div class="mt-4 text-right">
                            <button
                                class="px-3 py-1 flex items-center gap-2 bg-red-600 text-white rounded-2xl text-xs hover:bg-red-700"
                                @click="deleteTrip(trip.id)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M7.616 20q-.672 0-1.144-.472T6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.153T16.384 20zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.23 0 .423-.192t.192-.424zM9.808 17h1V8h-1zm3.384 0h1V8h-1zM7 6v13z" />
                                </svg>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import UserProfile from '~/components/UserProfile.vue' // Ensure this component exists

import { useReportStore } from '@/stores/reports';


const reportStore = useReportStore()

onMounted(() => {
    reportStore.getReportStore()
})


const openTrip = ref(null)

// Toggle trip details visibility
const toggleTrip = (index) => {
    openTrip.value = openTrip.value === index ? null : index
}

// Format date for display
const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

// Handle report action
const deleteTrip = async (tripId) => {
    // Implement report functionality (e.g., API call)
    await reportStore.deleteReport(tripId)
}
</script>

<style scoped>
/* Ensure the trips list scrolls properly */
.overflow-y-auto {
    scrollbar-width: thin;
    scrollbar-color: #64748b #1e293b;
}
</style>