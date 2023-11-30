export type userStore = {
  user: Ref<User | null>
  signInWithGoogle: () => void
  getRedirectUser: () => Promise<void>
}
export type User = {
  name: string
  email: string
  photoURL: string
}
