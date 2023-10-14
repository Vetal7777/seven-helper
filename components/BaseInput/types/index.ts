import { InputType } from '@/types'

export type currentTypeSetter = (type: InputType) => void

export interface Props {
  type?: InputType
  placeholder: string
  label: string
  modelValue: string
}
