<template>
  <div class="flex flex-col gap-2">
    <label
      v-if="label"
      class="flex max-w-min text-xs text-white duration-100 ease-out hover:scale-110"
      >{{ label }}</label
    >
    <div class="relative flex flex-col">
      <input
        :type="inputType"
        :placeholder="placeholder"
        class="w-full rounded-lg bg-slate-700 px-4 py-3 text-white outline-none duration-200 ease-in-out hover:bg-slate-600 focus:bg-slate-600"
      />

      <button
        v-if="isPassword"
        class="absolute bottom-0 right-3 top-0 flex items-center justify-center duration-200 ease-in-out hover:scale-110"
        @click.prevent="togglePasswordType"
      >
        <Icon
          v-if="showPassword"
          name="mdi:eye-off-outline"
          color="white"
          size="18px"
        />
        <Icon v-else name="mdi:eye-outline" color="white" size="18px" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InputType } from '@/types'
import { inputTypes } from '@/utils'
import { currentTypeSetter, Props } from './types'

const props = withDefaults(defineProps<Props>(), {
  type: 'text'
})

const isPassword = props.type === inputTypes.password
const passwordType = ref<InputType>()

const inputType = computed<string>(() => passwordType.value || props.type)
const showPassword = computed<boolean>(
  () => isPassword && passwordType.value === inputTypes.text
)

const setPasswordType: currentTypeSetter = (type) => {
  passwordType.value = type
}
const togglePasswordType = () => {
  if (passwordType.value === inputTypes.password) {
    setPasswordType(inputTypes.text)
    return
  }

  if (passwordType.value === inputTypes.text) {
    setPasswordType(inputTypes.password)
    return
  }
}

onMounted(() => {
  if (isPassword) {
    setPasswordType(props.type)
  }
})
</script>
