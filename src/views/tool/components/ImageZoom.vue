<template>
  <div class="images-view">
    <section
      class="image"
      ref="ImageViewRef"
      @mouseenter="showZoom = true"
      @mouseleave="showZoom = false"
      @mousemove="move"
    >
      <!-- 图片 -->
      <img src="@/assets/images/image-zoom.webp" />

      <!-- 里面变焦盒子 -->
      <div v-show="showZoom" ref="ZoomARef" class="zoom-a" :style="{ left: zoomA.left, top: zoomA.top }"></div>
    </section>

    <!-- 右侧放大镜盒子 -->
    <div v-show="showZoom" ref="ZoomBRef" class="zoom-b" :style="{ left: width + 10 + 'px' }">
      <img
        src="@/assets/images/image-zoom.webp"
        :style="{ left: zoomB.left, top: zoomB.top, width: width * proportion + 'px' }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useElementBounding } from '@vueuse/core'

const showZoom = ref(false)

const zoomA = reactive({ left: '0', top: '0' }) // 网格聚焦盒子
const zoomB = reactive({ left: '0', top: '0' }) // 放大视图盒子

const ImageViewRef = ref<HTMLElement | null>(null)
const { top, left, width, height } = useElementBounding(ImageViewRef)

const ZoomARef = ref<HTMLElement | null>(null)
const { width: zoomAWidth, height: zoomAHeight } = useElementBounding(ZoomARef)

const ZoomBRef = ref<HTMLElement | null>(null)
const { width: zoomBWidth, height: zoomBHeight } = useElementBounding(ZoomBRef)

// 放大比例
const proportion = computed(() => zoomBWidth.value / zoomAWidth.value)

// 在大图区域移动
const move = (e: MouseEvent) => {
  const minX = zoomAWidth.value / 2
  const minY = zoomAHeight.value / 2
  const maxX = width.value - minX
  const maxY = height.value - minY
  let ex = e.pageX - left.value
  let ey = e.pageY - top.value
  ex < minX && (ex = minX)
  ex > maxX && (ex = maxX)
  ey < minY && (ey = minY)
  ey > maxY && (ey = maxY)

  zoomA.left = ex - minX + 'px'
  zoomA.top = ey - minY + 'px'

  zoomB.left = -(ex - minX) * proportion.value + 'px'
  zoomB.top = -(ey - minY) * proportion.value + 'px'
}
</script>

<style lang="scss" scoped>
.images-view {
  flex: 1;
  background-color: #fafafa;
  position: relative;

  .image {
    width: 488px;
    height: 400px;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    position: relative;

    img {
      width: 100%;
    }

    .zoom-a {
      position: absolute;
      border: 1px solid #ccc;
      box-sizing: border-box;
      width: 200px;
      height: 200px;
      background-image: url('@/assets/images/zoom-point.png');
      z-index: 9;
    }
  }

  .zoom-b {
    position: absolute;
    top: 0;
    width: 300px;
    height: 300px;
    z-index: 10;
    overflow: hidden;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;

    img {
      position: absolute;
      object-fit: cover;
    }
  }
}
</style>
