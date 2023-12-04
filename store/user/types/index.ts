import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'

export type userStore = {
  user: Ref<User | null>
  loadUserFromDatabase: () => void
  signInWithGoogle: () => void
  signInWithGitHub: () => Promise<void>
  signOut: () => void
}
export type User = {
  name: string
  email: string
  photoURL: string
  id: string
}

export type AuthProvider = GoogleAuthProvider | GithubAuthProvider
