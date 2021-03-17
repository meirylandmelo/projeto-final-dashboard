export enum LoginTypes {
  POST_LOGIN_REQUEST = '@login/POST_LOGIN_REQUEST',
  POST_LOGIN_SUCCESS = '@login/POST_LOGIN_SUCCESS',
  POST_LOGIN_FAILED = '@login/POST_LOGIN_FAILED',
  GET_USER_REQUEST = '@user/GET_USER_REQUEST',
  GET_USER_SUCCESS = '@user/GET_USER_SUCCESS',
  GET_USER_FAILED = '@user/GET_USER_FAILED'
}

export interface Login {
  id?: number
  email?: string
  password?: string
}

export interface LoginObject {
  user: User | null
  loading: boolean
  accessToken: string | null
  error: boolean
}

export interface User {
  sub: number
  email: string
  password: string
  name: string
  role: string
}
