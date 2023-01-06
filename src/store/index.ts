import { createPinia } from 'pinia'
import { useUserStore } from './modules/user'
import { useNavTabStore } from './modules/navtab'
import { useAppStore } from './modules/app'
import { useMenuStore } from './modules/menu'

const pinia = createPinia()

export { useUserStore, useNavTabStore, useAppStore, useMenuStore }
export default pinia
