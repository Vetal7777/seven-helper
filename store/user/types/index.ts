export type userStore = {
  user: User
  signInWithGoogle: () => void
  getRedirectUser: () => void
}
export type User = {} | null
