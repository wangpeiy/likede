import Layout from '@/layout'

// 订单管理
export default {
  path: '/',
  component: Layout,
  meta: { title: '订单管理', icon: 'dashboard' },
  children: [{
    path: 'order',
    name: 'order',
    component: () => import('@/views/order/index'),
    meta: { title: '订单管理' }
  }]
}
