import { defineStore } from 'pinia'
import type { appStore } from './types'

export const useAppStore = defineStore('app', (): appStore => {
  const isLoading = ref(false)

  const cancelLoadingStatus = () => {
    setTimeout(() => {
      isLoading.value = false
    }, 1000)
  }

  return { isLoading, cancelLoadingStatus }
})
