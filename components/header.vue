<template>
  <div class="flex items-center justify-between p-4 text-white">
    <Logo
      class="cursor-pointer hover:ml-1"
      @click="navigateTo(ROUTES.home)"
      size="m"
    />
    <UserMenu />
  </div>
</template>

<script setup lang="ts">
import { ROUTES } from '@/routes'
</script>
