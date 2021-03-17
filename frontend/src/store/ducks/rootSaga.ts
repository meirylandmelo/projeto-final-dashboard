import { takeLatest, all } from 'redux-saga/effects'
import { LoginTypes } from './login/types'
import { auth, login } from './login/saga'
import { UserTypes } from './users/types'
import { addUser, deleteUser, listUser } from './users/saga'
import { ProductTypes } from './products/types'
import { addBeers, deleteBeers, ListBeers } from './products/saga'

export default function* rootSaga(): any {
  return yield all([
    takeLatest(LoginTypes.POST_LOGIN_REQUEST, login),
    takeLatest(LoginTypes.GET_USER_REQUEST, auth),
    takeLatest(UserTypes.GET_LISTUSER_REQUEST, listUser),
    takeLatest(UserTypes.POST_ADDUSER_REQUEST, addUser),
    takeLatest(UserTypes.DELETE_USER_REQUEST, deleteUser),
    takeLatest(ProductTypes.GET_LISTBEERS_REQUEST, ListBeers),
    takeLatest(ProductTypes.POST_ADDBEERS_REQUEST, addBeers),
    takeLatest(ProductTypes.DELETE_BEERS_REQUEST, deleteBeers)
  ])
}
