import { createRouter, createWebHistory } from 'vue-router'
import  page1 from '../components/page1.vue'
import page2 from '../components/page2.vue'
import page3 from '../components/page3.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            redirect:'/first'
        },
        {
            path: '/first',
            name: 'fistPage',
            component: page1
        },
        {
            path: '/second',
            name: 'secondPage',
            component: page2
        },
        {
            path: '/third',
            name: 'thirdPage',
            component: page3
        }
    ]
})

export default router