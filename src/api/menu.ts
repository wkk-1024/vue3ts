import request from '@/utils/request'
import type { commonType } from '@/api/user'

type menuItem = {
  id: string
  name: string
  permission: number
  created_at: string
  created_by: string
  updated_at: string
  updated_by: string
  description: string
  level:number
}

// 获取菜单列表
export const getMenuAll = () => {
  return request<commonType<menuItem[]>>({
    method: 'GET',
    url: '/m1/2305304-0-default/menu/getAll'
  })
}

// 将menuItem 全部改为可选类型
type choosable = Partial<menuItem>

// 将 menuItem 里的子类型生成一个新类型
type newMenu = Pick<menuItem, 'id' | 'name' | 'permission'> & { id?: string }

// 将指定类型 从 menuItem 中踢出
type oldMuen = Omit<menuItem, 'id' | 'name' | 'permission'>
export type { menuItem }