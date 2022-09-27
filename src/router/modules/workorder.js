import Layout from '@/layout'

// 工单管理
export default {
  path: '/workorder',
  component: Layout,
  meta: { title: '工单管理', icon: 'dashboard' },
  children: [{
    path: 'operation',
    name: 'operation',
    component: () => import('@/views/workorder/operation'),
    meta: { title: '运营工单' }
  },
  {
    path: 'maintenance',
    name: 'maintenance',
    component: () => import('@/views/workorder/maintenance'),
    meta: { title: '运维工单' }
  }]
}
