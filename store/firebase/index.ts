import { firebaseConfig } from '@/firebase.config'
import { User } from '@/store/user/types'
import { initializeApp, type FirebaseApp } from 'firebase/app'
import {
  Firestore,
  doc,
  getDoc,
  getFirestore,
  setDoc
} from 'firebase/firestore'
import { defineStore } from 'pinia'
import type { firebaseStore } from './types'

export const useFirebaseStore = defineStore('firebase', (): firebaseStore => {
  const app = ref<null | FirebaseApp>(null)
  const database = ref<null | Firestore>(null)

  const initFirebase = () => {
    app.value = initializeApp(firebaseConfig)
    database.value = getFirestore(app.value)
  }

  const addUserToDatabase = async (user: User) => {
    if (!database.value) throw new Error('Database is not init')

    await setDoc(doc(database.value, 'users', user.id), user)
  }

  const getUserFromDatabase = async (id: string) => {
    if (!database.value) throw new Error('Database is not init')

    const docRef = doc(database.value, 'users', id)
    const docSnap = await getDoc(docRef)
    const user = docSnap.data() as User | undefined

    return user
  }

  onBeforeMount(() => {
    if (!app.value) initFirebase()
  })

  return { app, initFirebase, addUserToDatabase, getUserFromDatabase }
})
