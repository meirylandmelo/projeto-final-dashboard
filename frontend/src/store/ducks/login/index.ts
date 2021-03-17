import { Reducer } from 'redux'
import { LoginTypes, LoginObject } from './types'
import { decodeToken } from 'react-jwt'

const INITIAL_STATE: LoginObject = {
  user: null,
  accessToken: null,
  loading: false,
  error: false
}

const reducer: Reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LoginTypes.POST_LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }
    case LoginTypes.POST_LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.accessToken)

      return {
        ...state,
        user: decodeToken(action.payload.accessToken),
        accessToken: action.payload.accessToken,
        loading: false
      }
    case LoginTypes.POST_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      }
    case LoginTypes.GET_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case LoginTypes.GET_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...{ name: action.payload.name, role: action.payload.role }
        }
      }
    case LoginTypes.GET_USER_FAILED:
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
