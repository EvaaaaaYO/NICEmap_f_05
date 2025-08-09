import {createWebHashHistory ,createRouter} from 'vue-router';

// 使用懶載入，減少初始載入時間
const MapView = () => import('@/view/MapView.vue');

const routes=[
  {
    path: '/',
    name: 'Home',
    component: MapView,
  }]

  const router=createRouter({
    history:createWebHashHistory(), // HTML5 模式路由，URL 會很漂亮
    routes
  })
  export default router
