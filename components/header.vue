<template>
  <div class="flex items-center justify-between p-4 text-white">
    <Logo
      class="cursor-pointer hover:ml-1"
      @click="navigateTo(ROUTES.home)"
      size="m"
    />
    <div class="flex items-center gap-3 text-xs text-black">
      {{ user?.name }}
      <img class="h-8 w-8 cursor-pointer rounded-full" :src="user?.photoURL" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ROUTES } from '@/routes'
import { storeToRefs } from 'pinia'
import { useUserStore } from '~/store/user'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)
</script>
