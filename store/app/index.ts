import { defineStore } from 'pinia'
import type { appStore } from './types'

export const useAppStore = defineStore('app', (): appStore => {
  const isLoading = ref(false)

  return { isLoading }
})
