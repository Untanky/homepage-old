<template>
  <div class="social-list">
    <SocialItem
      v-for="(social, index, key) of socials"
      :key="key"
      :social="social"
      class="social-item"
    />
  </div>
</template>

<script>
import SocialItem from './SocialItem.vue';

export default {
  name: 'SocialList',
  components: { SocialItem },
  data: () => ({
    socials: {
      instagram: {
        network: 'Instagram',
        link: 'https://instagram.com/Untanky',
        handle: '@Untanky',
        imageURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png',
      },
      github: {
        network: 'GitHub',
        link: 'https://github.com/Untanky',
        handle: 'Untanky',
        imageURI: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      },
      linkedIn: {
        network: 'LinkedIn',
        link: 'https://linkedin.com/in/lukasgrimm',
        handle: 'Lukas Grimm',
        imageURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png',
      },
      twitter: {
        network: 'Twitter',
        link: 'https://twitter.com/Untanky',
        handle: '@Untanky',
        imageURI: 'https://upload.wikimedia.org/wikipedia/de/thumb/9/9f/Twitter_bird_logo_2012.svg/600px-Twitter_bird_logo_2012.svg.png',
      },
    },
  }),
};
</script>

<style lang="scss" scoped>
.social-list {
  .social-item {
    &:not(:last-child) {
      margin-bottom: 2em;
    }
  }
}
</style>
