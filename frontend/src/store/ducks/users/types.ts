export enum UserTypes {
  GET_LISTUSER_REQUEST = '@user/GET_LISTUSER_REQUEST',
  GET_LISTUSER_SUCCESS = '@user/GET_LISTUSER_SUCCESS',
  GET_LISTUSER_FAILED = '@user/GET_LISTUSER_FAILED',
  POST_ADDUSER_REQUEST = '@user/POST_ADDUSER_REQUEST',
  POST_ADDUSER_SUCCESS = '@user/POST_ADDUSER_SUCCESS',
  POST_ADDUSER_FAILED = '@user/POST_ADDUSER_FAILED',
  DELETE_USER_REQUEST = '@user/DELETE_USER_REQUEST',
  DELETE_USER_SUCCESS = '@user/DELETE_USER_SUCCESS',
  DELETE_USER_FAILED = '@user/DELETE_USER_FAILED'
}

export interface User {
  id: number
  email: string
  password: string
  name: string
  role: string
}

export interface UserObject {
  users: User[]
  loading: boolean
  error: boolean
}
