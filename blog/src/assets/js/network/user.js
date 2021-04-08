import axios from 'axios'

export function request() {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/api/user',
    timeout: 5000,
  })
  return instance
}
