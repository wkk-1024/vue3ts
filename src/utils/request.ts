import axios, { AxiosHeaders } from 'axios'
import { myToken } from '@/stores/mytoken'
import { refreshToken } from '@/api/user'
import router from '@/router'

// noinspection TypeScriptValidateTypes
const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

//请求拦截
request.interceptors.request.use((config) => {
  const store = myToken()
  if (!config.headers) {
    config.headers = {} as AxiosHeaders
  }
  config.headers.token = store.token?.token
  return config
})

// 响应拦截器
request.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log('拦截');

    if (error.response.status === 401) {
      // token过期
      // 重新请求token
      const { data } = await refreshToken()
      if (data.success) {
        // 储存token
        myToken().saveToken(data.token)
        // 重新请求
        return request(error.config)
      } else {
        ElMessage.error('登录已过期，请重新登录!')
        router.push({ name: 'login' })
        return
      }
    }
    return Promise.reject(error)
  }
)
export default request
