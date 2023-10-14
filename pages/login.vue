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
        <div class="relative flex flex-col gap-5 duration-100 ease-out">
          <BaseInput
            v-model="email"
            placeholder="Email"
            label="Email"
            class="min-w-[400px]"
          />
          <BaseInput
            v-model="password"
            :type="INPUT_TYPE.password"
            class="min-w-[400px]"
            placeholder="Password"
            label="Password"
          />
        </div>

        <BaseButton :title="buttonSubmitTitle" @click="onSubmit" />

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
import { useUserStore } from '@/store/user'
import { FormData, LoginPageStatus, LoginPageStatusData } from '@/types'
import { LOGIN_PAGE_STATUS } from '@/utils'
definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})
const userStore = useUserStore()
const status = ref<LoginPageStatus>(LOGIN_PAGE_STATUS.login)
const email = ref<string>('')
const password = ref<string>('')

const statusData = computed<LoginPageStatusData>(() => ({
  [LOGIN_PAGE_STATUS.login]: status.value === LOGIN_PAGE_STATUS.login,
  [LOGIN_PAGE_STATUS.signIn]: status.value === LOGIN_PAGE_STATUS.signIn
}))
const formData = computed<FormData>(() => ({
  email: email.value,
  password: password.value
}))
const buttonSubmitTitle = computed<string>(() =>
  statusData.value[LOGIN_PAGE_STATUS.login] ? 'Login' : 'Sign in'
)
const footerMessageTitle = computed<string>(() =>
  statusData.value[LOGIN_PAGE_STATUS.login]
    ? "Doesn't have an account?"
    : 'Already have an account?'
)
const footerButtonTitle = computed<string>(() =>
  statusData.value[LOGIN_PAGE_STATUS.login] ? 'Sign in' : 'Login'
)
const toggleStatus = () => {
  if (statusData.value[LOGIN_PAGE_STATUS.login]) {
    status.value = LOGIN_PAGE_STATUS.signIn
    return
  }

  if (statusData.value[LOGIN_PAGE_STATUS.signIn]) {
    status.value = LOGIN_PAGE_STATUS.login
    return
  }
}
const onSubmit = () => {
  if (statusData.value[LOGIN_PAGE_STATUS.signIn]) {
    console.log(formData.value)
  }
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
