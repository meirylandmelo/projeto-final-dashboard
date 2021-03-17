import { call, put } from 'redux-saga/effects'
import api from '../../../service/loginService'
import { AxiosResponse } from 'axios'
import {
  postLoginSuccess,
  postLoginFailed,
  getUserSuccess,
  getUserFailed
} from './actions'

export function* login(action: any) {
  try {
    const response: AxiosResponse = yield call(api.login, action.payload)
    yield put(postLoginSuccess(response.data))
  } catch (error) {
    yield put(postLoginFailed())
  }
}
export function* auth(action: any) {
  try {
    const response: AxiosResponse = yield call(api.getUser, action.payload)
    yield put(getUserSuccess(response.data))
  } catch (error) {
    yield put(getUserFailed())
  }
}
