import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.安装插件
Vue.use(VueRouter)

const Home = () => import('@/views/home/Home.vue')
const Category = () => import('@/views/category/Category.vue')
const CourseTable = () => import('@/views/courseTable/CourseTable.vue')
const Profile = () => import('@/views/profile/Profile.vue')

// 2. 创建路由
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/table',
    component: CourseTable
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3. 导出
export default router