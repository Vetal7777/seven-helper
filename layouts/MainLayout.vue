<template>
  <div class="h-screen w-screen overflow-auto p-4">
    <div
      class="flex min-h-[calc(100vh-2rem)] w-full flex-col rounded-2xl bg-gradient-to-br from-gray-700 to-black"
    >
      <Header />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
