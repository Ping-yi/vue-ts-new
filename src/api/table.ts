import request from '@/utils/request'

export interface IListParams {
  key: number
}

export const getTableList = (params: IListParams) =>
  request({
    url: '/table/list',
    method: 'get',
    params: params
  })