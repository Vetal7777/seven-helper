<template>
  <div class="flex h-screen w-screen">
    <div
      class="flex h-screen grow items-center justify-center bg-login bg-cover"
    >
      <div
        class="flex flex-col items-center gap-5 rounded-2xl bg-gradient-to-br from-gray-700 to-black p-10"
      >
        <Logo size="xl" />

        <BaseInput placeholder="Email" label="Email" />
        <BaseInput
          :type="inputTypes.password"
          placeholder="Password"
          label="Password"
        />
        <div class="text-xs text-white">
          Doesn't have an account?
          <button
            class="text-slate-400 duration-200 ease-out hover:text-slate-300"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inputTypes } from '@/utils'

definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})
</script>

<style lang="scss" scoped></style>
