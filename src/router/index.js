// 1. 导入所需模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 2. 调用 Vue.use() 函数，将 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 3. 创建路由的实例对象
export const constantRoutes = [
  {path:'/dashboard',component:() => import('@/views/dashboard/index.vue')}
]

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
// 4. 导出路由的实例对象
export default router
// import Dashboard from '@/dashboard'