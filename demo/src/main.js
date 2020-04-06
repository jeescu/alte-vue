import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import AdminLTEVue from 'alte-vue';
import '@/plugins/icons';
import App from '@/App.vue';
import router from '@/router';

Vue.use(BootstrapVue);
Vue.use(AdminLTEVue);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: (createElement) => createElement(App),
});
