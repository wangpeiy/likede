import Layout from '@/layout'

// 对账统计
export default {
  path: '/',
  component: Layout,
  meta: { title: '对账统计', icon: 'dashboard' },
  children: [{
    path: 'accountcheck',
    name: 'accountcheck',
    component: () => import('@/views/accountcheck/index'),
    meta: { title: '对账统计' }
  }]
}
