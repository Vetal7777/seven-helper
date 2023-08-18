<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import { ROUTES } from '@/routes'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

onBeforeMount(() => {
  if (!user.value) {
    navigateTo(ROUTES.login)
  }
})
</script>

<style>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
