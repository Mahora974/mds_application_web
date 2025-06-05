import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Add from '@/pages/Add.vue'
// import Product from '@/pages/Product.vue'

const routes = [
		{
			path: '/',
			name: 'home',
			component: Home, 
			props: {success: true}
		},
		{
			path: '/add',
			name: 'add',
			component: Add
		},
		
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes
})

export default router
