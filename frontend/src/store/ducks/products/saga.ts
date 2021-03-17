import { call, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import api from '../../../service/productService'
import {
  deleteBeerFailed,
  deleteBeerSuccess,
  getListBeersFailed,
  getListBeersSuccess,
  postAddBeerFailed,
  postAddBeerSuccess
} from './actions'

export function* ListBeers() {
  try {
    const response: AxiosResponse = yield call(api.product)
    yield put(getListBeersSuccess(response.data))
  } catch (error) {
    yield put(getListBeersFailed())
  }
}

export function* addBeers(action: any) {
  try {
    const response: AxiosResponse = yield call(api.addProduct, action.payload)
    yield put(postAddBeerSuccess(response.data))
  } catch (error) {
    yield put(postAddBeerFailed())
  }
}

export function* deleteBeers(action: any) {
  try {
    yield call(api.deleteProduct, action.payload)
    yield put(deleteBeerSuccess(action.payload))
  } catch (error) {
    yield put(deleteBeerFailed())
  }
}
