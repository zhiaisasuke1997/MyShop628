/*
* 入口JS
* */
import Vue from 'vue'
import App from './App'
import router from './router'


new Vue({
  el:'#app',
  render:h => h(App),
  router //配置router 1.多了几个组件标签<router-link> <router-view> <keep-alive> ；2.多了两个属性可以访问 $route $router
})
