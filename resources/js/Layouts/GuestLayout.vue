<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <div class="min-h-screen w-full grid grid-rows-[max-content,1fr] grid-cols-1">
        <nav>
            <img src="/logo.svg" alt="">
            <h2>{{title}}</h2>
        </nav>

        <main>
            <slot />
        </main>
    </div>
</template>
