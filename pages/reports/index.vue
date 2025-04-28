<template>
    <div class="min-h-screen flex flex-col">
        <!-- Top Navigation -->
        <div class="fixed top-0 left-0 w-full h-[13vh] bg-cover bg-center overflow-x-hidden z-10"
            style="background-image: url('https://www.nepad.org/sites/default/files/styles/mega_banner_1920x600/public/2021-09/Med%20Safety%20App%20Microsite.jpg?itok=i5uKfVOf');">
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
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"
                            d="m21 21l-3.5-3.5M17 10a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z" />
                    </svg>
                    <div
                        class="flex items-center justify-center w-6 h-6 text-xs overflow-hidden bg-blue-500 text-white rounded-full">
                        <span>
                            <UserProfile />
                        </span>
                    </div>
                </div>
            </div>

            <div class="pl-5 mt-3 font-bold text-white text-xl absolute bottom-2">
                <div >
                    Reports
                </div>
                <p class="text-xs text-gray-300 font-normal mt-1">
                    Get a deeper insight into your reports
                </p>
            </div>

        </div>

        <!-- List of Trips -->
        <div class="mt-[13vh] px-2 pb-4 flex-grow overflow-y-auto">

            <div v-for="(trip, index) in trips" :key="trip.id" class="border-b border-slate-900 shadow-sm mb-4">
                <div class="flex items-center justify-between p-4 cursor-pointer" @click="toggleTrip(index)">
                    <div class="flex items-center space-x-4">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                            {{ trip.id }}
                        </div>
                        <div>
                            <h3 class="text-sm font-semibold">{{ trip.name }}</h3>
                            <p class="text-xs text-gray-500">{{ formatDate(trip.date) }}</p>
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
                                <p class="text-xs">KBX | {{ trip.details.route }}</p>
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
                                <p class="text-xs">{{ trip.details.issue }}</p>
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
                                <p class="text-xs">{{ trip.details.message }}</p>
                            </li>
                        </ol>
                    </div>
                    <div class="flex items-end w-full justify-between">
                        <div></div>
                        <div class="mt-4 text-right">
                            <button
                                class="px-3 py-1 flex items-center gap-2 bg-red-600 text-white rounded-2xl text-xs hover:bg-red-700"
                                @click="reportTrip(trip.id)">
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

// Sample trip data in JSON format
const trips = ref([
    {
        id: 1,
        name: 'Summer Road Trip',
        date: '2025-06-15',
        details: {
            location: 'Grand Canyon, AZ',
            message: 'message is too short',
            issue: 'Over Pricing',
            route: 'Nairobi - Thika',
            rating: 4.5,
            contacts: 'John Doe (555-123-4567)',
            amountPaid: 450.00
        }
    },
    {
        id: 2,
        name: 'Coastal Adventure',
        date: '2025-07-22',
        details: {
            location: 'Big Sur, CA',
            issue: 'Over Speeding',
            message: 'message is too long',
            route: 'San Francisco to Big Sur via Pacific Coast Highway',
            rating: 4.8,
            contacts: 'Jane Smith (555-987-6543)',
            amountPaid: 600.00
        }
    },
    {
        id: 3,
        name: 'Mountain Escape',
        date: '2025-08-10',
        details: {
            location: 'Rocky Mountains, CO',
            message: 'Looking forward to this adventure!',
            issue: 'Flat Tire',
            route: 'Denver - Estes Park',
            rating: 4.2,
            contacts: 'Mark Johnson (555-111-2233)',
            amountPaid: 550.00
        }
    },
    {
        id: 4,
        name: 'Desert Expedition',
        date: '2025-09-01',
        details: {
            location: 'Mojave Desert, CA',
            message: 'Adventuring through the heat!',
            issue: 'Engine Overheating',
            route: 'Los Angeles - Death Valley',
            rating: 4.7,
            contacts: 'Emily Davis (555-456-7890)',
            amountPaid: 700.00
        }
    },
    {
        id: 5,
        name: 'Island Getaway',
        date: '2025-10-15',
        details: {
            location: 'Maui, HI',
            message: 'Sun, sand, and relaxation!',
            issue: 'No issues',
            route: 'Honolulu - Lahaina',
            rating: 5.0,
            contacts: 'Luke Evans (555-234-5678)',
            amountPaid: 800.00
        }
    },
    {
        id: 6,
        name: 'City Lights Tour',
        date: '2025-11-05',
        details: {
            location: 'New York City, NY',
            message: 'Exploring the city that never sleeps',
            issue: 'Lost luggage',
            route: 'Central Park - Times Square',
            rating: 4.3,
            contacts: 'Sophia Lee (555-678-1234)',
            amountPaid: 650.00
        }
    },
    {
        id: 7,
        name: 'Wildlife Safari',
        date: '2025-12-18',
        details: {
            location: 'Serengeti, TZ',
            message: 'Witnessing nature in its purest form',
            issue: 'Delayed flights',
            route: 'Arusha - Serengeti National Park',
            rating: 4.9,
            contacts: 'David Miller (555-345-6789)',
            amountPaid: 1000.00
        }
    },
    {
        id: 8,
        name: 'Historical Exploration',
        date: '2026-01-20',
        details: {
            location: 'Rome, IT',
            message: 'Exploring ancient landmarks',
            issue: 'Crowded attractions',
            route: 'Colosseum - Roman Forum',
            rating: 4.6,
            contacts: 'Anna Green (555-222-3344)',
            amountPaid: 400.00
        }
    },
    {
        id: 9,
        name: 'Northern Lights Tour',
        date: '2026-02-12',
        details: {
            location: 'Reykjavik, IS',
            message: 'Chasing the northern lights',
            issue: 'Cold weather',
            route: 'Reykjavik - Thingvellir National Park',
            rating: 4.8,
            contacts: 'Chris White (555-654-9870)',
            amountPaid: 950.00
        }
    },
    {
        id: 10,
        name: 'Wine Country Tour',
        date: '2026-03-05',
        details: {
            location: 'Napa Valley, CA',
            message: 'Enjoying the finest wines',
            issue: 'Rainy weather',
            route: 'Napa - Sonoma',
            rating: 4.4,
            contacts: 'Olivia Brown (555-777-1112)',
            amountPaid: 750.00
        }
    }
])

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
const reportTrip = (tripId) => {
    // Implement report functionality (e.g., API call)
    alert(`Reporting trip with ID: ${tripId}`)
}
</script>

<style scoped>
/* Ensure the trips list scrolls properly */
.overflow-y-auto {
    scrollbar-width: thin;
    scrollbar-color: #64748b #1e293b;
}
</style>