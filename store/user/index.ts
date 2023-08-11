import { defineStore } from 'pinia'
import { User, userStore } from './types'

export const useUserStore = defineStore('user', (): userStore => {
  const user = ref<User>(null)
  return { user }
})
