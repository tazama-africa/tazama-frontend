<template>
    <div class="bg-slate-500 w-full  lg:block hidden">
        <aside id="separator-sidebar"
            class="fixed top-0 left-0 rounded-2xl shadow-xl m-4 bg-slate-400 z-40 w-[25%] h-[96%] transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar">
            <div class="h-full flex flex-col px-3 py-4 overflow-y-auto shadow-xl  rounded-xl  bg-white">
                <ul class="font-medium">
                    <li>
                        <NuxtLink to="/dashboard"
                            class="flex flex-col items-center justify-center p-2 gap-2 mb-10  cursor-pointer   rounded-lg text-orange-600 text-2xl group">
                            <!-- <NuxtImg src="/logo-short.png" class="lg:h-48 w-[80%] h-20 object-cover" alt="main-logo" /> -->
                            <div class="bg-orange-600 h-5 w-5 rounded-full ">
                                
                            </div>
                            <p>
                                Tazama
                            </p>
                        </NuxtLink>
                    </li>                    
                </ul>
                <!-- END LOGO -->
                <!-- SEARCH INTRO -->
                <div>
                    <div class="flex justify-between items-center text-gray-700">
                        <div class="flex gap-2">
                            <div class="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M8.672 7.542h6.656c3.374 0 5.062 0 6.01.987s.724 2.511.278 5.56l-.422 2.892c-.35 2.391-.525 3.587-1.422 4.303s-2.22.716-4.867.716h-5.81c-2.646 0-3.97 0-4.867-.716s-1.072-1.912-1.422-4.303l-.422-2.892c-.447-3.049-.67-4.573.278-5.56s2.636-.987 6.01-.987M8 18c0-.414.373-.75.833-.75h6.334c.46 0 .833.336.833.75s-.373.75-.833.75H8.833c-.46 0-.833-.336-.833-.75"
                                        clip-rule="evenodd" />
                                    <path fill="currentColor"
                                        d="M8.51 2h6.98c.233 0 .41 0 .567.015c1.108.109 2.014.775 2.399 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.099 2 8.278 2 8.51 2"
                                        opacity="0.4" />
                                    <path fill="currentColor"
                                        d="M6.31 4.723c-1.39 0-2.53.84-2.91 1.953l-.024.07a8 8 0 0 1 1.232-.253c1.08-.138 2.446-.138 4.032-.138h6.892c1.586 0 2.952 0 4.032.138c.42.054.834.133 1.232.253l-.023-.07c-.38-1.114-1.52-1.953-2.911-1.953z"
                                        opacity="0.7" />
                                </svg>
                            </div>
                            <div class="font-extrabold">Your Library</div>
                        </div>
                        <div class="flex gap-2">
                            <a href="/connect" class="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="48"
                                        d="M244 400L100 256l144-144M120 256h292" />
                                </svg>
                            </a>
                            <div class="text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 py-3">
                        <div
                            class="py-1 px-2 border rounded-full bg-orange-100 text-xs text-orange-600 border-orange-600 text-center">
                            Playlists
                        </div>
                    </div>
                    <div class="flex justify-between border-b border-t border-gray-200 py-2 mb-3">
                        <div class="">
                            <form class="w-full">
                                <label for="search" class="text-xs font-medium text-gray-900 sr-only">Search</label>
                                <div class="relative w-full">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="search"
                                        class="block w-full p-4 py-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 pl-5"
                                        placeholder="Search Playlists" required />
                                </div>
                            </form>
                        </div>
                        <div class="">
                            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                                class="bg-gradient-to-l from-orange-600 to-yellow-600 flex flex-row-reverse items-center justify-center gap-2 py-1 rounded-full flex px-3 text-sm text-gray-50 cursor-pointer hover:bg-orange-300">
                                <div>create</div>
                                <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- END INTRO -->
            </div>
        </aside>
    </div>
</template>
<script setup lang="ts">

</script>
