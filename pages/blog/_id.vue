<template>
  <blog-post class="blog-post"/>
</template>

<script>
import BlogPost from '../../components/BlogPost.vue';

export default {
  components: {
    BlogPost,
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/responsive";

.blog-post {
  @include tablet-up {
    top: 64px;
  }
}
</style>
