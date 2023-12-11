<template>
  <div class="h-screen w-screen overflow-auto bg-login p-4">
    <div
      class="flex min-h-[calc(100vh-2rem)] w-full flex-col gap-5 rounded-2xl bg-white p-4 shadow-xl"
    >
      <Header />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
