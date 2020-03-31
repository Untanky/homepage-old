// Import Vue.js
import Vue from 'vue';

// Import vue-highlight.js for code highlighting
import VueHighlightJS from 'vue-highlight.js';

// Highlight.js languages (All languages)
import 'vue-highlight.js/lib/allLanguages';

/*
* Import Highlight.js theme
* Find more: https://highlightjs.org/static/demo/
*/
import 'highlight.js/styles/dracula.css';

// Import root component and router setup
import App from './App.vue';
import router from './router';

import PostTextContent from './components/PostTextContent.vue';
import PostImageContent from './components/PostImageContent.vue';
import PostLinkContent from './components/PostLinkContent.vue';
import PostVideoContent from './components/PostVideoContent.vue';
import PostCodeContent from './components/PostCodeContent.vue';
import PostSectionTitle from './components/PostSectionTitle.vue';

Vue.component('post-text-content', PostTextContent);
Vue.component('post-image-content', PostImageContent);
Vue.component('post-link-content', PostLinkContent);
Vue.component('post-video-content', PostVideoContent);
Vue.component('post-code-content', PostCodeContent);
Vue.component('post-section-title', PostSectionTitle);

Vue.config.productionTip = false;

/*
* Use Vue Highlight.js
*/
Vue.use(VueHighlightJS);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
