import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/vueUse.vue')
  }, {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/login.vue')
  }, {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/home.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;