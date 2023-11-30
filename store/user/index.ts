import { useFirebaseStore } from '@/store/firebase'
import { STORAGE_KEYS } from '@/utils'
import {
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
  signInWithRedirect
} from 'firebase/auth'
import { defineStore } from 'pinia'
import type { User, userStore } from './types'
import { ROUTES } from '~/routes'

export const useUserStore = defineStore('user', (): userStore => {
  const user = ref<User | null>(null)
  const router = useRouter()
  const firebaseStore = useFirebaseStore()

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    signInWithRedirect(auth, provider)
    localStorage.setItem(STORAGE_KEYS.googleRedirect, String(true))
  }

  const getRedirectUser = async () => {
    const auth = getAuth()
    const res = await getRedirectResult(auth)

    localStorage.removeItem(STORAGE_KEYS.googleRedirect)

    try {
      if (!res) throw new Error('Failed to get redirect result')

      const { displayName: name, email, photoURL, uid: id } = res.user
      const currentUser = { name, email, photoURL, id }
      user.value = currentUser

      sessionStorage.setItem(STORAGE_KEYS.user, JSON.stringify(currentUser))
    } catch (error) {
      console.error(error)
    }
  }

  onBeforeMount(async () => {
    if (!user.value) {
      const storagedUser = sessionStorage.getItem(STORAGE_KEYS.user)

      if (storagedUser) {
        user.value = JSON.parse(storagedUser)
      } else {
        if (router.currentRoute.value.path !== ROUTES.login) {
          navigateTo(ROUTES.login)
        }
      }
    }
  })

  return { user, signInWithGoogle, getRedirectUser }
})
