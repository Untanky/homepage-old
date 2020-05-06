<template>
  <div class="socials">
    <h1 class="title">Socials</h1>
    <SocialList />
  </div>
</template>

<script>
import SocialList from '../components/SocialList.vue';

export default {
  name: 'Socials',
  components: { SocialList },
  head: () => ({
    title: 'Lukas Grimm - Social Media',
  }),
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-weight: 800;
}
</style>
