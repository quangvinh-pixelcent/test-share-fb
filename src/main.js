import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueMeta from 'vue-meta';
import VueSocialSharing from 'vue-social-sharing';

Vue.use(VueRouter)
Vue.use(VueMeta);
Vue.use(VueSocialSharing);

//\Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')