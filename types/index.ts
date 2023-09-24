export type Routes = {
  [key in RouteNames]: string
}

export type RouteNames = 'home' | 'login'

export type LogoSizes = 'xl' | 'm' | 'l' | 's'

export type InputType = 'text' | 'password'

export type InputTypes = {
  [key in InputType]: key
}
