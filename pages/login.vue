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
            <BaseInput
              placeholder="Name"
              label="Name"
              class="min-w-[400px]"
              v-if="!isLogIn"
            />
          </Transition>
          <BaseInput placeholder="Email" label="Email" class="min-w-[400px]" />
          <BaseInput
            :type="inputTypes.password"
            placeholder="Password"
            label="Password"
            class="min-w-[400px]"
          />
        </div>

        <BaseButton :title="buttonSubmitTitle" />

        <div class="flex gap-1 text-xs text-white">
          <div class="duration-100 ease-out hover:-translate-x-1">
            {{ footerMessageTitle }}
          </div>
          <button
            class="text-slate-400 duration-200 ease-out hover:text-slate-300"
            @click="toggleStatus"
          >
            {{ footerButtonTitle }}
          </button>
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

const isLogIn = ref(false)

const buttonSubmitTitle = computed<string>(() =>
  isLogIn.value ? 'Login' : 'Sign in'
)

const footerMessageTitle = computed<string>(() =>
  isLogIn.value ? "Doesn't have an account?" : 'Already have an account?'
)

const footerButtonTitle = computed<string>(() =>
  isLogIn.value ? 'Sign in' : 'Login'
)

const toggleStatus = () => {
  isLogIn.value = !isLogIn.value
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
