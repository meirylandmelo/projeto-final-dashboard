import { action } from 'typesafe-actions'
import { UserObject, UserTypes, User } from './types'

export const getListUserRequest = () => action(UserTypes.GET_LISTUSER_REQUEST)

export const getListUserSuccess = (data: UserObject) =>
  action(UserTypes.GET_LISTUSER_SUCCESS, data)

export const getListUserFailed = () => action(UserTypes.GET_LISTUSER_FAILED)

export const postAddUserRequest = (data: User) =>
  action(UserTypes.POST_ADDUSER_REQUEST, data)

export const postAddUserSuccess = (data: User) =>
  action(UserTypes.POST_ADDUSER_SUCCESS, data)

export const postAddUserFailed = () => action(UserTypes.POST_ADDUSER_FAILED)

export const deleteUserRequest = (id: any) =>
  action(UserTypes.DELETE_USER_REQUEST, id)

export const deleteUserSuccess = (id: any) =>
  action(UserTypes.DELETE_USER_SUCCESS, id)

export const deleteUserFailed = () => action(UserTypes.DELETE_USER_FAILED)
