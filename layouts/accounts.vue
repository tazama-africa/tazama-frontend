<template>
    <!-- <VitePwaManifest /> -->
    <div class="lg:bg-slate-100 bg-white">
        <slot />
    </div>
</template>


<style >
.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  transition: all .3s linear;
}

.page-left-enter-from, .page-right-leave-to {
  transform: translateX(100%);
}

.page-left-leave-to, .page-right-enter-from {
  transform: translateX(-100%);
}

.page-left-enter-to, .page-right-enter-to {
  transform: translateX(0);
}
</style>
