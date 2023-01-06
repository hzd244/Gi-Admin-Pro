import { getSystemDeptList, getSystemRoleList } from '@/api'
import type { DeptItem, RoleItem } from '@/api'

/** 部门模块 */
export function useApiDept() {
  const deptList = ref<DeptItem[]>([])

  const getDeptList = async () => {
    const res = await getSystemDeptList()
    if (res.success) {
      deptList.value = res.data.list
    }
  }

  getDeptList()

  return {
    deptList,
    getDeptList,
  }
}

/** 角色模块 */
export function useApiRole() {
  const roleList = ref<RoleItem[]>([])

  const getRoleList = async () => {
    const res = await getSystemRoleList()
    if (res.success) {
      roleList.value = res.data.list
    }
  }

  getRoleList()

  return {
    roleList,
    getRoleList,
  }
}
