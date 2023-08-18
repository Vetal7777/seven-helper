<template>
  <div class="flex items-center p-4 text-white">
    <Logo class="cursor-pointer" @click="navigateTo(ROUTES.home)" />
  </div>
</template>

<script setup lang="ts">
import { ROUTES } from '@/routes'
</script>
