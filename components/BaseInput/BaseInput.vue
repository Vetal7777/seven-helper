<template>
  <div class="flex flex-col gap-2">
    <label
      v-if="label"
      class="flex max-w-min text-xs text-white duration-100 ease-out hover:scale-110"
      >{{ label }}</label
    >
    <div class="relative flex flex-col">
      <input
        v-model="value"
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
import { InputType, PasswordTypeData } from '@/types'
import { INPUT_TYPE } from '@/utils'
import { Props, currentTypeSetter } from './types'

const emit = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<Props>(), {
  type: 'text'
})
const isPassword = props.type === INPUT_TYPE.password
const passwordType = ref<InputType>()
const passwordTypeData = computed<PasswordTypeData>(() => ({
  [INPUT_TYPE.password]: passwordType.value === INPUT_TYPE.password,
  [INPUT_TYPE.text]: passwordType.value === INPUT_TYPE.text
}))

const inputType = computed<string>(() => passwordType.value || props.type)
const showPassword = computed<boolean>(
  () => isPassword && passwordTypeData.value[INPUT_TYPE.text]
)
const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const setPasswordType: currentTypeSetter = (type) => {
  passwordType.value = type
}
const togglePasswordType = () => {
  if (passwordTypeData.value[INPUT_TYPE.password]) {
    setPasswordType(INPUT_TYPE.text)
    return
  }

  if (passwordType.value === INPUT_TYPE.text) {
    setPasswordType(INPUT_TYPE.password)
    return
  }
}

onMounted(() => {
  if (isPassword) {
    setPasswordType(props.type)
  }
})
</script>
