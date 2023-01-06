<template>
  <a-card>
    <template #header>
      <div class="card-header">
        <span class="font-medium"> 引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能 </span>
      </div>
    </template>
    <a-button type="primary" @click="guide"> 打开引导页 </a-button>
  </a-card>
</template>

<script setup lang="ts" name="Guide">
import intro from 'intro.js'
import 'intro.js/minified/introjs.min.css'

const guide = () => {
  intro()
    .setOptions({
      steps: [
        {
          element: document.querySelector('#header-notice'),
          title: '消息通知',
          intro: '您可以在这里查看管理员发送的消息',
          position: 'left',
        },
        {
          element: document.querySelector('#header-theme'),
          title: '主题切换',
          intro: '您可以在这里进行主题切换',
          position: 'left',
        },
        {
          element: document.querySelector('#header-setting'),
          title: '项目配置',
          intro: '您可以在这里查看项目配置',
          position: 'left',
        },
        {
          element: document.querySelector('.nav-tab'),
          title: '多标签页',
          intro: '这里是您访问过的页面的历史',
          position: 'bottom',
        },
      ],
    })
    .start()
}
</script>

<style lang="scss" scoped></style>
