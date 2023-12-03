<template>
  <Loader v-show="isLoading" />
  <NuxtPage />
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const appStore = useAppStore()

const { user } = storeToRefs(userStore)
const { isLoading } = storeToRefs(appStore)

onBeforeMount(async () => {
  const initUser = Boolean(user.value)

  if (!initUser) {
    userStore.loadUserFromDatabase()
    userStore.checkRedirectStatus()
  } else {
    isLoading.value = false
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
