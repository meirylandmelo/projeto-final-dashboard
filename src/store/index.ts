import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const createRootReducer = () => combineReducers({})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }
