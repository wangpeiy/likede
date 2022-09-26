import router from '@/router'
import store from '@/store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 定义一个白名单
const whiteList = ['/404', '/login']
// 路由前置守卫
router.beforeEach((to, from, next) => {
  nprogress.start() // 开启进度条
  // 先判断是否有token
  if (store.getters.token) {
    // 有token
    // 如果去登录页,跳转到主页
    if (to.path === '/login') {
      next('/')
    } else {
      // 如果不去登录页,放行
      next()
    }
  } else {
    // 没有 token
    // 判断是否在白名单中
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      // 如果不在就跳到登录页
      next('/login')
    }
  }
  nprogress.done() // 关闭进度条
})

// 路由后置守卫
router.afterEach(() => {
  nprogress.done() // 关闭进度条
})
