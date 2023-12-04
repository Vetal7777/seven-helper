import type { InputTypes } from '@/types'

export const INPUT_TYPE: InputTypes = {
  password: 'password',
  text: 'text'
}

const APP_ARTICLE = 'seven__'

const buildStorageKey = (key: string) => `${APP_ARTICLE}${key}`

const STORAGE_KEYS = ['authRedirect', 'userId']
const DATABASE_KEYS = ['users']

const buildStorageKeysData = Object.fromEntries(
  STORAGE_KEYS.map((key) => [key, buildStorageKey(key)])
)
const buildDatabaseKeysData = Object.fromEntries(
  DATABASE_KEYS.map((key) => [key, key])
)

export const STORAGE_KEYS_DATA = buildStorageKeysData
export const DATABASE_KEYS_DATA = buildDatabaseKeysData
