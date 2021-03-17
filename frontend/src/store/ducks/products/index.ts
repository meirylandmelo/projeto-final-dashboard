import { Reducer } from 'redux'
import { ProductObject, ProductTypes } from './types'

const INITIAL_STATE: ProductObject = {
  products: [],
  loading: false,
  error: false
}

const reducer: Reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ProductTypes.GET_LISTBEERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ProductTypes.GET_LISTBEERS_SUCCESS:
      return {
        ...state,
        products: action.payload
      }
    case ProductTypes.GET_LISTBEERS_FAILED:
      return {
        ...state,
        loadin: false,
        error: true
      }
    case ProductTypes.POST_ADDBEERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      }
    case ProductTypes.POST_ADDBEERS_SUCCESS:
      return {
        ...state,
        products: [...state.products, { ...action.payload }]
      }
    case ProductTypes.POST_ADDBEERS_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      }
    case ProductTypes.DELETE_BEERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ProductTypes.DELETE_BEERS_SUCCESS:
      const productIndex = state.products.findIndex(
        (item: any) => item.id === action.payload
      )

      if (productIndex >= 0) {
        state.products.splice(productIndex, 1)
      }

      return { ...state, loading: false, products: [...state.products] }
    case ProductTypes.DELETE_BEERS_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}

export default reducer
