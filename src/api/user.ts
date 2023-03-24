import request from '@/utils/request'
import qs from 'qs'
// 登录参数格式
type LoginInFo = {
  userName: string
  userPwd: string
  code?: string
}

// 返回参数定义
type LoginResult = {
  success: boolean
  data: Array<string>
  state: number
  msg: string
}
// 请求登录
export const LoginUser = (LoginInFo: LoginInFo) => {
  return request<LoginResult>({
    method: 'POST',
    url: 'm1/2305304-0-default/login',
    data: qs.stringify(LoginInFo)
  })
}

// 获取用户信息
type UserResult = {
  success: boolean
  data: Array<string>
  state: number
  msg: string
}

export const getUserInfo = () => {
  return request<UserResult>({
    method: 'GET',
    url: '/m1/2305304-0-default/getInfo'
  })
}

// 退出登录
export const exitUser = () => {
  return request({
    method: 'POST',
    url: '/m1/2305304-0-default/user/exit'
  })
}

// 刷新token
export const refreshToken = () => {
  return request({
    method: 'POST',
    url: '/m1/2305304-0-default/token/refresh'
  })
}
