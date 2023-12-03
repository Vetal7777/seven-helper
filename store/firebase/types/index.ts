import { User } from '@/store/user/types'
import type { FirebaseApp } from 'firebase/app'

export type firebaseStore = {
  initFirebase: () => void
  app: Ref<FirebaseApp | null>
  addUserToDatabase: (user: User) => Promise<void>
  getUserFromDatabase: (id: string) => Promise<User | undefined>
}
