import { firebaseConfig } from '@/firebase.config'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'
import { defineStore } from 'pinia'
import { firebaseStore } from './types'

export const useFirebaseStore = defineStore('firebase', (): firebaseStore => {
  const firebaseApp = ref<null | FirebaseApp>(null)
  const firebaseAuth = ref<null | Auth>(null)

  const initApp = () => {
    firebaseApp.value = initializeApp(firebaseConfig)
    firebaseAuth.value = getAuth()
  }

  return { firebaseApp, firebaseAuth, initApp }
})
