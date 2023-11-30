import { useFirebaseStore } from '@/store/firebase'
import { STORAGE_KEYS } from '@/utils'
import {
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
  signInWithRedirect
} from 'firebase/auth'
import { defineStore, storeToRefs } from 'pinia'
import type { User, userStore } from './types'

export const useUserStore = defineStore('user', (): userStore => {
  const firebaseStore = useFirebaseStore()

  const user = ref<User>(null)
  const { firebaseApp } = storeToRefs(firebaseStore)

  const signInWithGoogle = async () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    signInWithRedirect(auth, provider)
    localStorage.setItem(STORAGE_KEYS.googleRedirect, String(true))
  }

  const getRedirectUser = async () => {
    const auth = getAuth()
    getRedirectResult(auth)
      .then((result) => {
        localStorage.removeItem(STORAGE_KEYS.googleRedirect)
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken

        // The signed-in user info.
        const user = result.user
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  return { user, signInWithGoogle, getRedirectUser }
})
