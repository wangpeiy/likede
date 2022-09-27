import Layout from '@/layout'

// 设备管理
export default {
  path: '/equipment',
  component: Layout,
  meta: { title: '设备管理', icon: 'dashboard' },
  children: [{
    path: 'index',
    name: 'index',
    component: () => import('@/views/equipment/index'),
    meta: { title: '设备管理' }
  },
  {
    path: 'status',
    name: 'status',
    component: () => import('@/views/equipment/status'),
    meta: { title: '设备状态' }
  }, {
    path: 'type',
    name: 'type',
    component: () => import('@/views/equipment/type'),
    meta: { title: '设备类型管理' }
  }]
}
