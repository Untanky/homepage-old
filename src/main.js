import Vue from 'vue';
import App from './App.vue';
import router from './router';

import PostTextContent from './components/PostTextContent.vue';
import PostSectionTitle from './components/PostSectionTitle.vue';

Vue.component('post-text-content', PostTextContent);
Vue.component('post-section-title', PostSectionTitle);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
