import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

import '@/styles/css/transition.css'
import '@/styles/index.scss'
import '@/styles/arco-ui/index.less'
import '@arco-themes/vue-gi-demo/index.less'
import '@arco-design/web-vue/dist/arco.css'

// 自定义指令
import directives from './directives'

const app = createApp(App)
app.use(createPinia()).use(Vue3Lottie).use(router).use(directives).use(ArcoVueIcon).mount('#app')
