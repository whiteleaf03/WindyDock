import * as VueRouter from 'vue-router'
import Dock from '../components/Dock.vue';
import Settings from '../components/Settings.vue';

const routes = [
  {
    path: '/',
    redirect: '/dock'
  },
  {
    path: '/dock',
    component: Dock
  },
  {
    path: '/settings',
    component: Settings,
    children: []
  }
]

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})
