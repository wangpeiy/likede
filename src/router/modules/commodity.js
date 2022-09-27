import Layout from '@/layout'

// 商品管理
export default {
  path: '/commodity',
  component: Layout,
  meta: { title: '商品管理', icon: 'dashboard' },
  children: [{
    path: 'sku-class',
    name: 'sku-class',
    component: () => import('@/views/commodity/sku-class'),
    meta: { title: '商品分类' }
  },
  {
    path: 'sku',
    name: 'sku',
    component: () => import('@/views/commodity/sku'),
    meta: { title: '商品管理' }
  }]
}
