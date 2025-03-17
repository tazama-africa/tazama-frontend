<template>
    <div>
        <h2 class="text-xl font-bold mb-4">Song Playlist</h2>

        <table class="table-auto w-full border-collapse border border-gray-300">
            <thead>
                <tr class="bg-gray-200">
                    <th class="border p-2">#</th>
                    <th class="border p-2">Title</th>
                    <th class="border p-2">Artist</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(song, index) in filteredPlaylist" :key="index">
                    <td class="border p-2">{{ index + 1 }}</td>
                    <td class="border p-2">{{ song?.title || "No Song" }}</td>
                    <td class="border p-2">{{ song?.artist || "Unknown Artist" }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
defineProps({
    playlist: {
        type: Array,
        required: true,
    },
});

// Remove null values from the playlist
const filteredPlaylist = computed(() => {
    return props.playlist.filter((song) => song !== null);
});
</script>