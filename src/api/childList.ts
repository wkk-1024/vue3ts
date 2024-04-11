/*
 * @Author: wang 
 * @Date: 2023-05-23 15:14:23 
 * @Last Modified by: wang
 * @Last Modified time: 2023-05-23 15:16:46
 */

import request from '@/utils/request'

//列表
export const getTableList = () => {
  return request({
    method: 'GET',
    url: '/m1/2305304-0-default/tableList'
  })
}
