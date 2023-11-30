import { firebaseConfig } from '@/firebase.config'
import { initializeApp, type FirebaseApp } from 'firebase/app'
import { defineStore } from 'pinia'
import type { firebaseStore } from './types'
import { Auth, GoogleAuthProvider, getAuth } from 'firebase/auth'

export const useFirebaseStore = defineStore('firebase', (): firebaseStore => {
  const firebaseApp = ref<null | FirebaseApp>(null)

  const initApp = () => {
    firebaseApp.value = initializeApp(firebaseConfig)
  }

  onBeforeMount(() => {
    if (!firebaseApp.value) initApp()
  })

  return { firebaseApp, initApp }
})
