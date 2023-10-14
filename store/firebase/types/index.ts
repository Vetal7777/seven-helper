import { FirebaseApp } from 'firebase/app'
import { Auth } from 'firebase/auth'

export type firebaseStore = {
  firebaseApp: Ref<FirebaseApp | null>
  firebaseAuth: Ref<Auth | null>
  initApp: () => void
}
