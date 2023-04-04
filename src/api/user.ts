import request from '@/utils/request'
import qs from 'qs'

// 公共类型 提取公共部分
type commonType<T> = {
  success: boolean
  state: number
  msg: string
  data: T
}

// 登录参数格式
type LoginInFo = {
  userName: string
  userPwd: string
  code?: string
}

// 返回参数定义
type LoginResult = commonType<Array<string>>
// 请求登录
export const LoginUser = (LoginInFo: LoginInFo) => {
  return request<LoginResult>({
    method: 'POST',
    url: 'm1/2305304-0-default/login',
    data: qs.stringify(LoginInFo)
  })
}

// 获取用户信息
type UserResult = commonType<Array<string>>

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
let isRefreshToken = false  // 定义刷新中的状态
let refreshTokenRT: Promise<any> // 返回类型
export const refreshToken = () => {
  if (isRefreshToken) {
    return refreshTokenRT
  }
  isRefreshToken = true
  refreshTokenRT = request({
    method: 'POST',
    url: '/m1/2305304-0-default/token/refresh'
  }).finally(()=>{
    isRefreshToken = false
  })
  return refreshTokenRT
}

export type {commonType}