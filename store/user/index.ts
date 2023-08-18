import { firebaseConfig } from '@/firebase.config'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth'
import { defineStore } from 'pinia'
import { User, userStore } from './types'

export const useUserStore = defineStore('user', (): userStore => {
  const user = ref<User>(null)
  const firebaseApp: FirebaseApp = initializeApp(firebaseConfig)
  const googleProvider: GoogleAuthProvider = new GoogleAuthProvider()

  return { user }
})
