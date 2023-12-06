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
          <BaseButton
            class="flex max-h-[44px] w-40 items-center justify-center gap-2 bg-black font-semibold"
            @click="userStore.signInWithGitHub"
          >
            <template #children>
              <div class="grid grid-flow-col grid-cols-3 items-center">
                <Icon name="uil:github" color="white" size="17px" />
                <p class="translate-x-2">GitHub</p>
              </div>
            </template>
          </BaseButton>
          <BaseButton
            @click="userStore.signInWithGoogle"
            class="flex max-h-[44px] w-40 items-center justify-center gap-2 bg-red-500 font-semibold"
          >
            <template #children>
              <div class="grid grid-flow-col grid-cols-3 items-center">
                <Icon name="grommet-icons:google" color="white" size="14px" />
                <p class="translate-x-2">Google</p>
              </div>
            </template>
          </BaseButton>
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
