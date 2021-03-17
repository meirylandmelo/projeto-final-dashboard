import { Product } from '../store/ducks/products/types'
import api from './api'

const productService = {
  product: () =>
    api.get('/beers', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }),
  addProduct: (data: Product) =>
    api.post('/beers', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }),
  deleteProduct: (id: any) =>
    api.delete(`/beers/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
}

export default productService
