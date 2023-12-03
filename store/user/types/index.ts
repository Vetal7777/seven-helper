import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'

export type userStore = {
  user: Ref<User | null>
  checkRedirectStatus: () => void
  loadUserFromStorage: () => void
  signInWithGoogle: () => void
  signInWithGitHub: () => Promise<void>
}
export type User = {
  name: string
  email: string
  photoURL: string
  id: string
} | null

export type AuthProvider = GoogleAuthProvider | GithubAuthProvider
