<template>
  <div
    class="relative mb-5 flex w-min"
    :class="{
      'scale-100': size === 'xl',
      'scale-90': size === 'l',
      'scale-75': size === 'm',
      'scale-50': size === 's'
    }"
  >
    <div class="text-5xl text-white">seven</div>
    <div
      class="text-s absolute bottom-[-16px] right-[-30px] rounded-xl bg-white px-[6px] text-black"
    >
      wallet
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'xl'
  }
})
</script>
