import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.use(ElementUI)

// 1、创建组件
import index from './components/Index.vue'

// 2、配置路由
const routes = [
	{ path: '/index', component: index },
	// { path: '*', redirect: 'index' }  /*默认跳转路由*/
]

// 3、实例化VueRouter
const router = new VueRouter({
	routes
})

// 4、挂载路由
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
