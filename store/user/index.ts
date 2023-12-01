import { useAppStore } from '@/store/app'
import { useFirebaseStore } from '@/store/firebase'
import { STORAGE_KEYS_DATA } from '@/utils'
import {
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
  signInWithRedirect
} from 'firebase/auth'
import { defineStore, storeToRefs } from 'pinia'
import { ROUTES } from '~/routes'
import type { User, userStore } from './types'

export const useUserStore = defineStore('user', (): userStore => {
  const user = ref<User>(null)
  const router = useRouter()
  const appStore = useAppStore()
  const firebaseStore = useFirebaseStore()
  const { isLoading } = storeToRefs(appStore)

  const checkRedirectStatus = async () => {
    const redirect = localStorage.getItem(STORAGE_KEYS_DATA.googleRedirect)

    if (redirect) {
      isLoading.value = true
      await getRedirectUser()
    }
  }

  const getRedirectUser = async () => {
    const auth = getAuth()
    const res = await getRedirectResult(auth)

    localStorage.removeItem(STORAGE_KEYS_DATA.googleRedirect)

    try {
      if (!res) throw new Error('Failed to get redirect result')

      const { displayName: name, email, photoURL, uid: id } = res.user
      const currentUser = { name, email, photoURL, id } as User

      user.value = currentUser

      saveUserInStorage(currentUser)
      navigateTo(ROUTES.home)
      isLoading.value = false
    } catch (error) {
      console.error(error)
    }
  }

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    signInWithRedirect(auth, provider)
    localStorage.setItem(STORAGE_KEYS_DATA.googleRedirect, String(true))
  }

  const saveUserInStorage = (user: User) => {
    localStorage.setItem(STORAGE_KEYS_DATA.user, JSON.stringify(user))
  }

  const loadUserFromStorage = () => {
    const storagedUser = localStorage.getItem(STORAGE_KEYS_DATA.user)

    if (storagedUser) {
      isLoading.value = true
      user.value = JSON.parse(storagedUser)

      redirectToMainSys()
      isLoading.value = false
    } else {
      redirectToLoginUser()
    }
  }

  const redirectToMainSys = () => {
    if (router.currentRoute.value.path === ROUTES.auth) {
      navigateTo(ROUTES.home)
    }
  }

  const redirectToLoginUser = () => {
    if (router.currentRoute.value.path !== ROUTES.auth) {
      navigateTo(ROUTES.auth)
    }
  }

  return { user, loadUserFromStorage, checkRedirectStatus, signInWithGoogle }
})
