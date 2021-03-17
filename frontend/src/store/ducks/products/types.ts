export enum ProductTypes {
  GET_LISTBEERS_REQUEST = '@product/GET_LISTBEERS_REQUEST',
  GET_LISTBEERS_SUCCESS = '@product/GET_LISTBEERS_SUCCESS',
  GET_LISTBEERS_FAILED = '@product/GET_LISTBEERS_FAILED',
  POST_ADDBEERS_REQUEST = '@product/POST_ADDBEERS_REQUEST',
  POST_ADDBEERS_SUCCESS = '@product/POST_ADDBEERS_SUCCESS',
  POST_ADDBEERS_FAILED = '@product/POST_ADDBEERS_FAILED',
  DELETE_BEERS_REQUEST = '@product/DELETE_BEERS_REQUEST',
  DELETE_BEERS_SUCCESS = '@product/DELETE_BEERS_SUCCESS',
  DELETE_BEERS_FAILED = '@product/DELETE_BEERS_FAILED'
}

export interface Product {
  id: number
  title: string
  price: string
  description: string
  image: string
}

export interface ProductObject {
  products: Product[]
  loading: boolean
  error: boolean
}
