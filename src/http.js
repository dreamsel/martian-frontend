import axios from 'axios'

const devmode = process.env.NODE_ENV === 'development'
const $http = axios.create({
  baseURL: devmode ? 'http://localhost:3000' : `${process.env.SERVERHOST}:${process.env.SERVERPORT}`,
  withCredentials: true
})

$http.interceptors.response.use(response => Promise.resolve(response.data),
  error => Promise.reject(error))

export default $http
