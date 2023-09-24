<template>
  <button
    class="rounded-lg bg-white px-4 py-3 outline-none duration-200 ease-in-out hover:scale-110"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  title: String
})
</script>
