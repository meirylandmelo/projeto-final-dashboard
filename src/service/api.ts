import axios from 'axios'

const baseApiLocal = 'http://localhost:4000'

const api = axios.create({
  baseURL: baseApiLocal
})

export default api
