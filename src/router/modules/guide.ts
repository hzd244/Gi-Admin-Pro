import { DEFAULT_LAYOUT } from '../base'

const Guide = {
  component: DEFAULT_LAYOUT,
  children: [
    {
      path: '/guide',
      name: 'Guide',
      component: () => import('@/views/guide/index.vue'),
      meta: { title: '引导页', keepAlive: false },
    },
  ],
}

export default Guide
