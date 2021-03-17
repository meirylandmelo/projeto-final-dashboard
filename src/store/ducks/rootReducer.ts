import { combineReducers } from 'redux'
import login from './login'
import users from './users'
import products from './products'

const createRootReducer = () =>
  combineReducers({
    login,
    users,
    products
  })

export default createRootReducer
