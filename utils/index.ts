import type { InputTypes } from '@/types'

export const INPUT_TYPE: InputTypes = {
  password: 'password',
  text: 'text'
}

const APP_ARTICLE = 'seven__'

const buildStorageKey = (key: string) => `${APP_ARTICLE}${key}`

const STORAGE_KEYS = ['authRedirect', 'user']

const tempStorageKeysData = Object.fromEntries(
  STORAGE_KEYS.map((key) => [key, buildStorageKey(key)])
)

export const STORAGE_KEYS_DATA = tempStorageKeysData
