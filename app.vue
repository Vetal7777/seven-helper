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
  }
})
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
