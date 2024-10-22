import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
	path: '/',
	name: 'Home',
	component: Home
    },
    {
	path: '/active',
	name: 'Active',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "active" */ '../views/Active.vue')
    },
    {
	path: '/close',
	name: 'Close',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "close" */ '../views/Close.vue')
    },
    {
	path: '/create',
	name: 'Create',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "create" */ '../views/Create.vue')
    },
    {
	path: '/offers',
	name: 'Offers',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "offers" */ '../views/Offers.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
