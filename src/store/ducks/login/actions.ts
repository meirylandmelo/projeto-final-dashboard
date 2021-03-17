import { Login, LoginObject, LoginTypes, User } from './types'
import { action } from 'typesafe-actions'

export const postLoginRequest = (data: Login) =>
  action(LoginTypes.POST_LOGIN_REQUEST, data)

export const postLoginSuccess = (data: LoginObject) =>
  action(LoginTypes.POST_LOGIN_SUCCESS, data)

export const postLoginFailed = () => action(LoginTypes.POST_LOGIN_FAILED)

export const getUserRequest = (sub: string) =>
  action(LoginTypes.GET_USER_REQUEST, sub)

export const getUserSuccess = (data: User) =>
  action(LoginTypes.GET_USER_SUCCESS, data)

export const getUserFailed = () => action(LoginTypes.GET_USER_FAILED)
