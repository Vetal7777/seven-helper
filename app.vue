<template>
  <Loader v-if="loading" />
  <NuxtPage v-else />
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const loading = ref(true)

onBeforeMount(async () => {
  const initUser = Boolean(user.value)

  if (!initUser) {
    userStore.loadUserFromStorage()
    userStore.checkRedirectStatus()
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
