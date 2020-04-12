// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';

import PostTextContent from '../components/content/PostTextContent.vue';
import PostImageContent from '../components/content/PostImageContent.vue';
import PostLinkContent from '../components/content/PostLinkContent.vue';
import PostVideoContent from '../components/content/PostVideoContent.vue';
import PostCodeContent from '../components/content/PostCodeContent.vue';
import PostSectionTitle from '../components/content/PostSectionTitle.vue';

Vue.component('post-text-content', PostTextContent);
Vue.component('post-image-content', PostImageContent);
Vue.component('post-link-content', PostLinkContent);
Vue.component('post-video-content', PostVideoContent);
Vue.component('post-code-content', PostCodeContent);
Vue.component('post-section-title', PostSectionTitle);
