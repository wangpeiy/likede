import Layout from '@/layout'

// 人员管理
export default {
  path: '/personnel',
  component: Layout,
  meta: { title: '人员管理', icon: 'dashboard' },
  children: [{
    path: 'index',
    name: 'index',
    component: () => import('@/views/personnel/index'),
    meta: { title: '人员列表' }
  },
  {
    path: 'user-task-stats',
    name: 'user-task-stats',
    component: () => import('@/views/personnel/user-task-stats'),
    meta: { title: '人效统计' }
  }, {
    path: '/user-work',
    name: 'user-work',
    component: () => import('@/views/personnel/user-work'),
    meta: { title: '工作量列表' }
  }]
}
