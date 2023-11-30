import type { FirebaseApp } from 'firebase/app'

export type firebaseStore = {
  firebaseApp: Ref<FirebaseApp | null>
  initApp: () => void
}
