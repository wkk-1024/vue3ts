import request from "@/utils/request";

// 登录参数格式
type LoginInFo = {
  user_name: string
  user_pwd: string
  code?: string
}


// 返回参数定义
type LoginResult = {
  success: boolean
  data: Array<string>
  state: number
}
// 请求登录
export const LoginUser = (LoginInFo: LoginInFo) => {
  return request<LoginResult>({
    method: 'POST',
    url: 'm1/2305304-0-default/login',
    data: LoginInFo
  })
}