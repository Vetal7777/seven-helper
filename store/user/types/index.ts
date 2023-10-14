export type userStore = {
  user: User
  createUserWithEmail: createUserWithEmail
}
export type User = {} | null
export type createUserWithEmailProps = { email: string; password: string }
export type createUserWithEmail = (props: createUserWithEmailProps) => void
