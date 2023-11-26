<template>
  <div class="flex h-screen w-screen">
    <form
      class="flex h-screen grow items-center justify-center bg-login bg-cover"
      @submit.prevent
    >
      <div
        class="flex flex-col items-center gap-5 rounded-2xl bg-gradient-to-br from-gray-700 to-black p-10"
      >
        <Logo size="xl" />
        <div class="flex flex-col gap-4">
          <BaseButton
            class="flex min-w-[300px] items-center justify-center gap-2"
          >
            <template #title>
              <Icon name="uil:github" color="black" size="20px" />
            </template>
          </BaseButton>
          <BaseButton
            class="flex min-w-[300px] items-center justify-center gap-2"
          >
            <template #title>
              <Icon name="grommet-icons:google" color="black" size="20px" />
            </template>
          </BaseButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'
definePageMeta({
  pageTransition: {
    name: 'rotate'
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
