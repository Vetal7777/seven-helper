<template>
  <div class="flex h-screen w-screen">
    <div
      class="flex h-screen grow items-center justify-center bg-login bg-cover"
    >
      <Logo size="l" class="absolute left-4 top-4" />
      <form
        class="flex flex-col items-center gap-9 rounded-md bg-white p-10 shadow-xl"
        @submit.prevent
      >
        <header class="flex flex-col items-center justify-center gap-4">
          <article class="text-3xl font-semibold">Log In</article>
          <p class="text-sm text-slate-400">We are happy to see you back!</p>
        </header>
        <main class="flex flex-wrap items-center justify-center gap-4">
          <v-btn
            class="lighten-1 text-none font-weight-bold w-40 rounded-sm bg-black text-white"
            variant="flat"
            size="large"
            @click="userStore.signInWithGitHub"
          >
            <template #prepend>
              <Icon class="mr-5" name="uil:github" color="white" size="17px" />
            </template>
            GitHub
          </v-btn>
          <v-btn
            class="bg-red-lighten-1 text-none font-weight-bold w-40 rounded-sm text-white"
            variant="flat"
            size="large"
            @click="userStore.signInWithGoogle"
          >
            <template #prepend>
              <Icon
                class="mr-5"
                name="grommet-icons:google"
                color="white"
                size="14px"
              />
            </template>
            Google
          </v-btn>
        </main>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'
definePageMeta({
  pageTransition: {
    name: 'slide-fade'
  }
})
const userStore = useUserStore()
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
