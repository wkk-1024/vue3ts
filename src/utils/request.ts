import axios, { AxiosHeaders } from 'axios'
import { myToken } from '@/stores/mytoken' 

const request = axios.create({
  //baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

//请求拦截
request.interceptors.request.use((config) => {
  const store = myToken()
  if(!config.headers){
    config.headers = {} as AxiosHeaders
  }
  config.headers.token = store.token?.token
  return config
})
export default request