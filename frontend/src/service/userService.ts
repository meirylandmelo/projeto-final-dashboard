import { User } from '../store/ducks/users/types'
import api from './api'

const userService = {
  user: () =>
    api.get('/users?role=admin&role=editor', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }),
  addUser: (data: User) =>
    api.post('/users', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }),
  deleteUser: (id: any) =>
    api.delete(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
}

export default userService
