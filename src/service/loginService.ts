import api from './api'
import { Login } from '../store/ducks/login/types'

const loginService = {
  login: (data: Login) => api.post('/login', data),
  getUser: (sub: string) =>
    api.get(`/users/${sub}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
}

export default loginService
