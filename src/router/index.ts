import { createRouter,createWebHistory } from "vue-router";
import  {type RouteRecordRaw} from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        name:'home',
        path:'/',
        redirect:'/layout'
    },{
        name:'layput',
        path:'/layout',
        component:()=>import('@/pages/menu/index.vue')
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router