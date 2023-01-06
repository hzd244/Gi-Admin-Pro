import { DEFAULT_LAYOUT } from '../base'

const Able = {
  component: DEFAULT_LAYOUT,
  children: [
    {
      path: '/able/print',
      name: 'AblePrint',
      component: () => import('@/views/able/print/index.vue'),
      meta: { title: '打印功能', keepAlive: false },
    },
  ],
}

export default Able
