import { call, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import api from '../../../service/userService'
import {
  deleteUserSuccess,
  getListUserFailed,
  getListUserSuccess,
  postAddUserFailed,
  postAddUserSuccess
} from './actions'
import { deleteBeerFailed } from '../products/actions'

export function* listUser() {
  try {
    const response: AxiosResponse = yield call(api.user)
    yield put(getListUserSuccess(response.data))
  } catch (error) {
    yield put(getListUserFailed())
  }
}

export function* addUser(action: any) {
  try {
    const response: AxiosResponse = yield call(api.addUser, action.payload)
    yield put(postAddUserSuccess(response.data))
  } catch (error) {
    yield put(postAddUserFailed())
  }
}

export function* deleteUser(action: any) {
  try {
    yield call(api.deleteUser, action.payload)
    yield put(deleteUserSuccess(action.payload))
  } catch (error) {
    yield put(deleteBeerFailed())
  }
}
