/*
 * @Author: wang
 * @Date: 2023-05-23 15:14:23
 * @Last Modified by: wang
 * @Last Modified time: 2023-05-23 15:16:46
 */
import {type commonType} from "@/api/user";
import {type TableItem} from "@/types";
import request from '@/utils/request'

// 定义表格类型
// export type tableItem = {
//   id: number,
//   name: string,
//   age: number,
//   email: string,
//   phone: string,
// }
//列表
export const getTableList = () => {
  return request<commonType<TableItem[]>>({
    method: 'GET',
    url: '/m1/2305304-0-default/tableList'
  })
}
