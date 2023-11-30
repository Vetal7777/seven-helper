import type { FirebaseApp } from 'firebase/app'
import { Auth } from 'firebase/auth'

export type firebaseStore = {
  initApp: () => void
  firebaseApp: Ref<FirebaseApp | null>
}
