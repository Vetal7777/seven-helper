<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <div
      class="fixed z-50 inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-white border-t-gray-300 border-opacity-70"
    />
  </div>
</template>

<style lang="scss" scoped>
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
