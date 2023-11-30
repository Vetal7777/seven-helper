import { firebaseConfig } from '@/firebase.config'
import { initializeApp, type FirebaseApp } from 'firebase/app'
import { defineStore } from 'pinia'
import type { firebaseStore } from './types'

export const useFirebaseStore = defineStore('firebase', (): firebaseStore => {
  const firebaseApp = ref<null | FirebaseApp>(null)

  const initApp = () => {
    firebaseApp.value = initializeApp(firebaseConfig)
  }

  return { firebaseApp, initApp }
})
