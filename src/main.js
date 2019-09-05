import Vue from 'vue'
import App from './App.vue'
import antd from 'ant-design-vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)

Vue.config.productionTip = false
Vue.use(antd)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  render: h => h(App),
}).$mount('#app')
