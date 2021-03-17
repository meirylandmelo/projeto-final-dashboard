import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store: Store = createStore(
  createRootReducer(),
  composeWithDevTools(applyMiddleware(...middleware))
)

sagaMiddleware.run(rootSaga)

export default store
