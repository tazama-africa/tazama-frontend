<template>
    <NuxtLayout>
        <div class="flex font-['Montserrat'] text-gray-600 justify-between flex-col items-center h-screen">
            <div class="h-screen flex flex-col gap-4 items-center justify-center">
                <div class="bg-white  p-5 shadow lg:px-40 flex-col gap-5 rounded-xl flex items-center justify-center">
                    <div class="bg-white rounded-xl flex items-center justify-center">
                        <NuxtImg src="/logo-block-t.png" class=" w-[80%] h-32 object-cover" />
                    </div>
                    <h2 class="text-4xl font-bold">
                        404
                    </h2>
                    <h3 class="text-xl">
                        Dang
                    </h3>
                    <p>It looks like something broke.</p>
                    <p>Sorry about that.</p>
                    <nuxt-link to="/" class="py-2 px-20 bg-blue-600 text-white rounded-xl hover:bg-blue-400">
                        Go to Home
                    </nuxt-link>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>