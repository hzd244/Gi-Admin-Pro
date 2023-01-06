import http from '@/utils/http'
import qs from 'qs'
const prefix = '/mock'
import type { PersonItem } from './type'

/** @desc 获取人物列表 */
export function getPersonList(data: { name?: string; status?: string; current: number; pageSize: number }) {
  return http.get<ApiRes<ApiListData<PersonItem[]>>>(`${prefix}/person/list`, data)
}
