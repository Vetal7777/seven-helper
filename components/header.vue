<template>
  <div class="flex items-center p-4 text-white">
    <a
      class="hover:scale-101 cursor-pointer transition-all duration-100 ease-out hover:ml-1"
      @click="navigateTo(ROUTES.home)"
    >
      <Logo />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ROUTES } from '@/routes'
</script>
