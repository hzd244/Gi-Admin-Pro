<template>
  <div class="test">
    <section class="left">
      <GiHead title="组件示例" style="padding: 0"></GiHead>
      <div class="tab-box">
        <a-tabs position="left" hide-content v-model:active-key="selectedKey">
          <a-tab-pane :title="item.name" v-for="(item, index) in menuList" :key="index"></a-tab-pane>
        </a-tabs>
      </div>
    </section>

    <section class="content">
      <transition name="fade-slide" mode="out-in" appear>
        <component :is="menuList[selectedKey].value"></component>
      </transition>
    </section>
  </div>
</template>

<script setup lang="ts" name="Tool">
import ImageView from './components/ImageZoom.vue'
import CropperVue from './components/Cropper.vue'
import Logo from './components/Logo.vue'
import Map from './components/Map/index.vue'
import PassWordStrong from './components/PasswordStrong.vue'

const selectedKey = ref(0)

const menuList = [
  { name: '密码强度', value: PassWordStrong },
  { name: '地图插件', value: Map },
  { name: '渐变色Logo', value: Logo },
  { name: '图片裁剪', value: CropperVue },
  { name: '图片放大镜', value: ImageView },
]
</script>

<style lang="scss" scoped>
:deep(.arco-tabs-nav-vertical.arco-tabs-nav-type-line .arco-tabs-tab) {
  padding: 0;
  margin: 0;
  padding: 8px 16px;

  &:hover {
    background: var(--color-fill-1);

    .arco-tabs-tab-title {
      &::before {
        display: none !important;
      }
    }
  }

  &.arco-tabs-tab-active {
    background: rgba(var(--primary-6), 0.08);
  }
}

:deep(.arco-tabs-nav-vertical::before) {
  left: 0;
  display: none;
}

:deep(.arco-tabs-nav-vertical .arco-tabs-nav-ink) {
  left: 0;
}

:deep(.arco-tabs-nav-vertical) {
  float: none;
  flex-direction: row;
}

.test {
  flex: 1;
  padding: $margin;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;

  .left {
    width: 180px;
    padding: $padding;
    padding-top: 0;
    background: var(--color-bg-1);
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    flex-direction: column;

    .tab-box {
      flex: 1;
      overflow-y: auto;
      padding-top: 12px;
    }
  }

  .content {
    flex: 1;
    height: 100%;
    padding: $padding;
    background: var(--color-bg-1);
    margin-left: $margin;
    border-radius: $radius-box;
    box-sizing: border-box;
    overflow: auto;
    overflow-x: hidden;
  }
}
</style>
