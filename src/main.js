import Vue from 'vue';
import Linxios from '@webdataorg/linxios-vue';
import App from './App.vue';
import router from './router';

import PostTextContent from './components/PostTextContent.vue';
import PostImageContent from './components/PostImageContent.vue';
import PostLinkContent from './components/PostLinkContent.vue';
import PostSectionTitle from './components/PostSectionTitle.vue';

Vue.component('post-text-content', PostTextContent);
Vue.component('post-image-content', PostImageContent);
Vue.component('post-link-content', PostLinkContent);
Vue.component('post-section-title', PostSectionTitle);

Vue.use(Linxios);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
