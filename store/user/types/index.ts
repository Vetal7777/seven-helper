export type userStore = {
  user: Ref<User | null>
  checkRedirectStatus: () => void
  loadUserFromStorage: () => void
  signInWithGoogle: () => void
}
export type User = {
  name: string
  email: string
  photoURL: string
  id: string
} | null
