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
  </div>
</template>

<script>
export default {
  name: 'PostVideoContent',
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
  height: (9 / 16) * 600px;
  border: $thin-border-primary;
  border-radius: $border-radius;
  box-shadow: $shadow;

  .video {
    width: 100%;
    height: (9 / 16) * 600px;
    border-radius: $border-radius;
  }
}
</style>
