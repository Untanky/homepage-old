<template>
  <div
    class="post-video-content"
  >
    <iframe
      :src="youtubeUrl"
      class="video"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <Caption
      type="Video"
      :caption="content.caption"
    />
  </div>
</template>

<script>
import Caption from './Caption.vue';

export default {
  name: 'PostVideoContent',
  components: {
    Caption,
  },
  props: {
    content: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    youtubeUrl() {
      return `https://www.youtube.com/embed/${this.content.videoId}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../_variables.scss";

.post-video-content {
  width: 100%;
  border-radius: $border-radius;

  .video {
    width: 100%;
    height: (9 / 16) * 600px;
    border-radius: $border-radius;
    box-shadow: $shadow;
  }
}
</style>
