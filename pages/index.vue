<template>
  <div class="home">
    <introduction />
    <website-content
      heading="Portfolio"
    >
      Interested in Lukas? You can check if he matches your requirements for an open position
      by reading through his portfolio. You can check his skills and previous employments there.
    </website-content>
  </div>
</template>

<script>
import Introduction from '../components/Introduction.vue';
import WebsiteContent from '../components/WebsiteContent.vue';

export default {
  components: {
    Introduction,
    WebsiteContent,
  },
};
</script>

<style scoped>
.title {
  font-weight: 800;
}
</style>
