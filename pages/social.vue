<template>
  <div class="socials">
    <Title>{{ $t('pages.socials') }}</Title>
    <SocialList />
  </div>
</template>

<script>
import Title from '../components/Title.vue';
import SocialList from '../components/SocialList.vue';

export default {
  name: 'Socials',
  components: {
    Title,
    SocialList,
  },
  head: () => ({
    title: 'Lukas Grimm - Social Media',
  }),
};
</script>
