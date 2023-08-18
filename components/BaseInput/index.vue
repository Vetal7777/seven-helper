<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" class="text-xs text-white">{{ label }}</label>
    <div class="relative flex flex-col">
      <input
        :type="currentType || type"
        :placeholder="placeholder"
        class="w-[400px] rounded-lg bg-slate-700 px-4 py-3 text-white outline-none duration-200 ease-in-out hover:bg-slate-600 focus:bg-slate-600"
      />

      <button
        v-if="isPassword"
        class="absolute bottom-0 right-3 top-0 flex items-center justify-center duration-200 ease-in-out hover:scale-110"
        @click="toggleCurrentType"
      >
        <Icon
          v-if="currentType === inputTypes.text"
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
import { currentTypeSetter } from './types'

const props = defineProps({
  type: {
    type: String as PropType<InputType>,
    defaultValue: 'text'
  },
  placeholder: {
    type: String
  },
  label: {
    type: String
  }
})

const isPassword = props.type === inputTypes.password

const currentType = ref<InputType>()

const setCurrentType: currentTypeSetter = (type) => {
  if (isPassword) {
    currentType.value = type
  }
}

const toggleCurrentType = () => {
  if (currentType.value === inputTypes.password) {
    setCurrentType(inputTypes.text)
    return
  }

  if (currentType.value === inputTypes.text) {
    setCurrentType(inputTypes.password)
    return
  }
}

onMounted(() => {
  setCurrentType(props.type!)
})
</script>
