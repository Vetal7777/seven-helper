<template>
  <div class="flex h-screen w-screen">
    <form
      class="flex h-screen grow items-center justify-center bg-login bg-cover"
      @submit.prevent="onSubmit"
    >
      <div
        class="flex flex-col items-center gap-5 rounded-2xl bg-gradient-to-br from-gray-700 to-black p-10"
      >
        <Logo size="xl" />
        <div class="relative flex flex-col gap-5 duration-100 ease-out">
          <Transition>
            <BaseInput placeholder="Name" label="Name" v-if="isSignIn" />
          </Transition>
          <BaseInput placeholder="Email" label="Email" />
          <BaseInput
            :type="inputTypes.password"
            placeholder="Password"
            label="Password"
          />
        </div>
        <div class="text-xs text-white">
          <template v-if="isLogIn">
            Doesn't have an account?
            <button
              class="text-slate-400 duration-200 ease-out hover:text-slate-300"
              @click="toggleStatus"
            >
              Sign in
            </button>
          </template>

          <template v-if="isSignIn">
            Already have an account?
            <button
              class="text-slate-400 duration-200 ease-out hover:text-slate-300"
              @click="toggleStatus"
            >
              Login
            </button>
          </template>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { inputTypes } from '@/utils'

definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})

const isSignIn = ref(true)
const isLogIn = ref(false)

const toggleStatus = () => {
  isLogIn.value = !isLogIn.value
  isSignIn.value = !isSignIn.value
}

const onSubmit = (event: Event) => {
  console.log('submit')
  console.log(event)
}
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
