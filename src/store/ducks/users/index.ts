import { Reducer } from 'redux'
import { UserObject, UserTypes } from './types'

const INITIAL_STATE: UserObject = {
  users: [],
  loading: false,
  error: false
}

const reducer: Reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case UserTypes.GET_LISTUSER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case UserTypes.GET_LISTUSER_SUCCESS:
      return {
        ...state,
        users: action.payload
      }
    case UserTypes.GET_LISTUSER_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      }
    case UserTypes.POST_ADDUSER_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      }
    case UserTypes.POST_ADDUSER_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        users: [...state.users, { ...action.payload }]
      }
    case UserTypes.POST_ADDUSER_FAILED:
      return {
        ...state,
        loading: true
      }
    case UserTypes.DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case UserTypes.DELETE_USER_SUCCESS:
      const userIndex = state.users.findIndex(
        (item: any) => item.id === action.payload
      )

      if (userIndex >= 0) {
        state.users.splice(userIndex, 1)
      }

      return { ...state, loading: false, users: [...state.users] }
    case UserTypes.DELETE_USER_FAILED:
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
