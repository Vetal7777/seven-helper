export type Routes = {
  [key in RouteNames]: string
}

export type RouteNames = 'home' | 'auth'

export type InputType = 'text' | 'password'

export type InputTypes = {
  [key in InputType]: key
}
export type PasswordTypeData = {
  [key in InputType]: boolean
}
