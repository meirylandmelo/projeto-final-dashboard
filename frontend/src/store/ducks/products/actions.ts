import { action } from 'typesafe-actions'
import { Product, ProductObject, ProductTypes } from './types'

export const getListBeersRequest = () =>
  action(ProductTypes.GET_LISTBEERS_REQUEST)

export const getListBeersSuccess = (data: ProductObject) =>
  action(ProductTypes.GET_LISTBEERS_SUCCESS, data)

export const getListBeersFailed = () =>
  action(ProductTypes.GET_LISTBEERS_FAILED)

export const postAddBeerRequest = (data: Product) =>
  action(ProductTypes.POST_ADDBEERS_REQUEST, data)

export const postAddBeerSuccess = (data: Product) =>
  action(ProductTypes.POST_ADDBEERS_SUCCESS, data)

export const postAddBeerFailed = () => action(ProductTypes.POST_ADDBEERS_FAILED)

export const deleteBeerRequest = (id: any) =>
  action(ProductTypes.DELETE_BEERS_REQUEST, id)

export const deleteBeerSuccess = (id: any) =>
  action(ProductTypes.DELETE_BEERS_SUCCESS, id)

export const deleteBeerFailed = () => action(ProductTypes.DELETE_BEERS_FAILED)
