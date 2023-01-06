<template>
  <a-layout-sider collapsible breakpoint="xl" :width="232" class="asider">
    <a-menu
      :default-open-keys="['Workplace']"
      :auto-open-selected="true"
      :style="{ width: '100%', height: '100%' }"
      :selected-keys="[activeKey]"
    >
      <MenuItem
        v-for="item in menuStore.menuTree"
        :key="item.name"
        :data="item"
        @click="handleClickItem"
      />
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { useMenuStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'

const menuStore = useMenuStore()
const router = useRouter()
const route = useRoute()
const activeKey = ref('Workplace')

const getMenuKeys = (params: MenuItem[]) => {
  const data: string[] = []
  function forTree(arr: MenuItem[]) {
    arr.forEach((item: MenuItem) => {
      if (item.path) {
        data.push(item.path)
      }
      if (item.children?.length) {
        forTree(item.children)
      }
    })
  }
  forTree(params)
  return data
}

const menuKeyList = getMenuKeys(menuStore.menuTree)

const handleClickItem = (item: MenuItem) => {
  if (!item.path) return
  if (item.path === '/file') {
    router.push({ path: item.path, query: { fileType: 0 } })
  } else {
    router.push({ path: item.path })
  }
  if (menuKeyList.includes(item.path)) {
    activeKey.value = item.path
  }
}

watch(
  () => route.path,
  () => {
    if (menuKeyList.includes(route.path)) {
      activeKey.value = route.path
    }
  },
  { immediate: true },
)
</script>

<style lang="scss" scoped>
:deep(.arco-menu.arco-menu-vertical.arco-menu-collapsed) {
  // Menu菜单组件修改
  .arco-menu-icon {
    margin-right: 0;
    padding: 10px 0;
  }
  .arco-menu-has-icon {
    padding: 0;
    justify-content: center;
  }
  .arco-menu-title {
    display: none;
  }
}

.asider {
  z-index: 1000;
}
</style>
