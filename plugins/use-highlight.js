// eslint-disable-next-line import/no-extraneous-dependencies
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

/*
* Use Vue Highlight.js
*/
Vue.use(VueHighlightJS);
