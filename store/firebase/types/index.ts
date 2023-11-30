import type { FirebaseApp } from 'firebase/app'
import type { Auth } from 'firebase/auth'

export type firebaseStore = {
  firebaseApp: Ref<FirebaseApp | null>
  firebaseAuth: Ref<Auth | null>
  initApp: () => void
}
