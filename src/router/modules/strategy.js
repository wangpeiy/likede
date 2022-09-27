import Layout from '@/layout'

// 策略管理
export default {
  path: '/',
  component: Layout,
  meta: { title: '策略管理', icon: 'dashboard' },
  children: [{
    path: '/strategy',
    name: 'strategy',
    component: () => import('@/views/strategy/index'),
    meta: { title: '策略管理', icon: 'dashboard' }
  }]
}
