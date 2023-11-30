import { useFirebaseStore } from '@/store/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { defineStore, storeToRefs } from 'pinia'
import type { User, createUserWithEmail, userStore } from './types'

export const useUserStore = defineStore('user', (): userStore => {
  const firebaseStore = useFirebaseStore()

  const user = ref<User>(null)
  const { firebaseApp, firebaseAuth } = storeToRefs(firebaseStore)

  const createUserWithEmail: createUserWithEmail = ({ email, password }) => {
    try {
      if (firebaseAuth.value) {
        createUserWithEmailAndPassword(firebaseAuth.value, email, password)
      }
    } catch (error) {}
  }

  return { user, createUserWithEmail }
})
