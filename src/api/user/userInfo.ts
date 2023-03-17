import request from "@/utils/request";
import qs from "qs";

type GetUserInfo = {
  token:string
}
type UserInfo = {
  success: boolean
  data: Array<string>
  state: number
  msg: string
}

export const getUserInfo = (token:GetUserInfo) => {
  return request<UserInfo>({
    method: 'GET',
    url: '/m1/2305304-0-default/getInfo',
    data: token
  })
}
