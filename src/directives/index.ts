import type { App } from 'vue'
import loading from './v-loading'

export default {
  install(Vue: App) {
    Vue.directive('loading', loading)
  },
}
