<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import { ROUTES } from '@/routes'
import { useFirebaseStore } from '@/store/firebase'
import { useUserStore } from '@/store/user'
import { STORAGE_KEYS } from '@/utils'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const checkRedirectStatus = async () => {
  const redirect = localStorage.getItem(STORAGE_KEYS.googleRedirect)

  if (redirect) {
    await userStore.getRedirectUser()
  }
}

onBeforeMount(async () => {
  await checkRedirectStatus()
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
