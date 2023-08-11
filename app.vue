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
