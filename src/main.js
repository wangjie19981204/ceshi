import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import router from './router/index.js'
// Vue.use(VueRouter);
Vue.use(ViewUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
