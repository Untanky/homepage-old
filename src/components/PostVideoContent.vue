<template>
  <div
    class="post-video-content"
  >
    <iframe
      :src="youtubeUrl"
      class="video"
      frameborder="0"
      allowfullscreen
      :height="iframeHeight"
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
  data: () => ({
    iframeHeight: '400',
  }),
  computed: {
    youtubeUrl() {
      return `https://www.youtube.com/embed/${this.content.videoId}`;
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.fixVideoDimensions();
    });

    this.fixVideoDimensions();
  },
  methods: {
    fixVideoDimensions() {
      const video = document.querySelector('.video');
      const height = (9 / 16) * video.offsetWidth;
      this.iframeHeight = `${height}`;
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
    border-radius: $border-radius;
    box-shadow: $shadow;
  }
}
</style>
