<template>
  <div
    class="logo__container flex w-min duration-100 ease-out hover:scale-110"
    :class="{
      'mb-5': currentSize.xl,
      'mb-[1.125rem]': currentSize.l,
      'mb-[0.94rem]': currentSize.m,
      'mb-[0.625rem]': currentSize.s
    }"
  >
    <div
      class="relative text-white"
      :class="{
        'min-w-[137px] text-5xl': currentSize.xl,
        'min-w-[123px] text-[2.7rem] leading-[0.9]': currentSize.l,
        'min-w-[104px] text-[2.25rem] leading-[0.75]': currentSize.m,
        'min-w-[68px] text-[1.5rem] leading-[0.5]': currentSize.s
      }"
    >
      seven
      <div
        class="logo__description absolute right-0 rounded-xl bg-white text-black"
        :class="{
          'bottom-[-16px] px-[6px] text-base': currentSize.xl,
          'bottom-[-14.4px] px-[5.4px] text-[0.9rem] leading-[1.3]':
            currentSize.l,
          'bottom-[-14px] px-[4.5px] text-[0.75rem] leading-[1.3]':
            currentSize.m,
          'bottom-[-13px] px-[3px] text-[0.5rem] leading-[1.3]': currentSize.s
        }"
      >
        helper
      </div>
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
