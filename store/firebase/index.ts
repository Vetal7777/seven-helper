import { firebaseConfig } from '@/firebase.config'
import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { defineStore } from 'pinia'
import type { firebaseStore } from './types'

export const useFirebaseStore = defineStore('firebase', (): firebaseStore => {
  const firebaseApp = ref<null | FirebaseApp>(null)
  const firebaseAuth = ref<null | Auth>(null)

  const initApp = () => {
    firebaseApp.value = initializeApp(firebaseConfig)
    firebaseAuth.value = getAuth()
  }

  return { firebaseApp, firebaseAuth, initApp }
})
