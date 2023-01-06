<template>
  <a-tabs v-model:active-key="selectedKey">
    <a-tab-pane :key="item.id" :title="item.title" v-for="item in mapList"> </a-tab-pane>
  </a-tabs>

  <transition name="fade-slide" mode="out-in" appear>
    <component :is="mapList[selectedKey].comp"></component>
  </transition>
</template>

<script setup lang="ts">
import BaiduMap from './components/BaiduMap.vue'

const selectedKey = ref(1)

const mapList = [
  { id: 1, title: '百度地图', comp: BaiduMap },
  { id: 2, title: '高德地图', comp: '' },
  { id: 3, title: '腾讯地图', comp: '' },
]
</script>

<style lang="scss" scoped></style>
