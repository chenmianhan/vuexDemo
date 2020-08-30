// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'jquery'
// 引入新建的store.js
import store from './store.js'
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  	el: '#app',
  	router,
  	store,//实例化
  	template: '<App/>',
	components: { App }
})
