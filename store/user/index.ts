import { useAppStore } from '@/store/app'
import { useFirebaseStore } from '@/store/firebase'
import { STORAGE_KEYS_DATA } from '@/utils'
import {
  Auth,
  AuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
  signInWithRedirect as signInWithFirebaseRedirect
} from 'firebase/auth'
import { defineStore, storeToRefs } from 'pinia'
import { ROUTES } from '~/routes'
import type { User, userStore } from './types'

export const useUserStore = defineStore('user', (): userStore => {
  const user = ref<User | null>(null)
  const router = useRouter()
  const appStore = useAppStore()
  const firebaseStore = useFirebaseStore()
  const { isLoading } = storeToRefs(appStore)

  const checkRedirectStatus = async () => {
    const redirect = localStorage.getItem(STORAGE_KEYS_DATA.authRedirect)

    if (redirect) {
      await getRedirectUser()
    }
  }

  const getRedirectUser = async () => {
    const auth = getAuth()
    const res = await getRedirectResult(auth)

    localStorage.removeItem(STORAGE_KEYS_DATA.authRedirect)

    if (!res) {
      navigateTo(ROUTES.auth)
      throw new Error('Failed to get redirect result')
      return
    }

    const { displayName: name, email, photoURL, uid: id } = res.user
    const currentUser = { name, email, photoURL, id } as User

    saveUserIdInStorage(currentUser.id)

    const userFromDatabase = await firebaseStore.getUserFromDatabase(
      currentUser.id
    )

    if (!userFromDatabase) {
      await firebaseStore.addUserToDatabase(currentUser)

      user.value = currentUser
    } else {
      user.value = userFromDatabase
    }

    navigateTo(ROUTES.home)
  }

  const signInWithRedirect = (auth: Auth, provider: AuthProvider) => {
    signInWithFirebaseRedirect(auth, provider)
    localStorage.setItem(STORAGE_KEYS_DATA.authRedirect, String(true))
  }

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    signInWithRedirect(auth, provider)
  }

  const signInWithGitHub = async () => {
    const provider = new GithubAuthProvider()
    const auth = getAuth()

    signInWithRedirect(auth, provider)
  }

  const saveUserIdInStorage = (id: string) => {
    localStorage.setItem(STORAGE_KEYS_DATA.userId, id)
  }

  const loadUserFromDatabase = async () => {
    const userId = localStorage.getItem(STORAGE_KEYS_DATA.userId)

    if (userId) {
      const userFromDatabase = await firebaseStore.getUserFromDatabase(userId)

      if (userFromDatabase) {
        user.value = userFromDatabase
        redirectToMainSys()
      } else {
        redirectToLoginUser()
      }
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

  return {
    user,
    loadUserFromDatabase,
    checkRedirectStatus,
    signInWithGoogle,
    signInWithGitHub
  }
})
