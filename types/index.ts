export type Routes = {
  [key in RouteNames]: string
}

export type RouteNames = 'home' | 'login'

export type LogoSizes = 'xl' | 'm' | 'l' | 's'

export type InputType = 'text' | 'password'

export type InputTypes = {
  [key in InputType]: key
}
export type PasswordTypeData = {
  [key in InputType]: boolean
}
export type FormData = {
  email: string
  password: string
}
export type LoginPageStatus = 'login' | 'signIn'
export type LoginPageStatusKey = {
  [key in LoginPageStatus]: key
}
export type LoginPageStatusData = {
  [key in LoginPageStatus]: boolean
}
