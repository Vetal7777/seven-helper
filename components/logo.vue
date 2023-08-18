<template>
  <div
    class="logo__container relative flex w-min duration-100 ease-out hover:scale-110"
    :class="{
      'mb-5': currentSize.xl,
      'mb-[1.125rem]': currentSize.l,
      'mb-[0.94rem]': currentSize.m,
      'mb-[0.625rem]': currentSize.s
    }"
  >
    <div
      class="text-white"
      :class="{
        'text-5xl': currentSize.xl,
        'text-[2.7rem] leading-[0.9]': currentSize.l,
        'text-[2.25rem] leading-[0.75]': currentSize.m,
        'text-[1.5rem] leading-[0.5]': currentSize.s
      }"
    >
      seven
    </div>
    <div
      class="logo__description absolute bottom-[-16px] rounded-xl bg-white text-black"
      :class="{
        'right-[-30px] px-[6px] text-base': currentSize.xl,
        'right-[-27px] px-[5.4px] text-[0.9rem]': currentSize.l,
        'right-[-22.5px] px-[4.5px] text-[0.75rem]': currentSize.m,
        'right-[-15px] px-[3px] text-[0.5rem]': currentSize.s
      }"
    >
      wallet
    </div>
  </div>
</template>

<script setup lang="ts">
import { LogoSizes } from '@/types'

const props = defineProps({
  size: {
    type: String as PropType<LogoSizes>,
    default: 'xl',
    require: false
  }
})

const currentSize = ref({
  xl: props.size === 'xl',
  l: props.size === 'l',
  m: props.size === 'm',
  s: props.size === 's'
})
</script>

<style scoped lang="scss">
.logo {
  &__container {
    &:hover {
      & .logo__description {
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        transition-duration: 150ms;
        transform: rotate(-20deg);
      }
    }
  }
}
</style>
