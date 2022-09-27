import Layout from '@/layout'

// 点位管理
export default {
  path: '/pointlocation',
  component: Layout,
  meta: { title: '点位管理', icon: 'dashboard' },
  children: [{
    path: 'region',
    name: 'region',
    component: () => import('@/views/pointlocation/region'),
    meta: { title: '区域管理' }
  },
  {
    path: 'node',
    name: 'node',
    component: () => import('@/views/pointlocation/node'),
    meta: { title: '点位管理' }
  }, {
    path: 'partner',
    name: 'partner',
    component: () => import('@/views/pointlocation/partner'),
    meta: { title: '合作商管理' }
  }]
}
