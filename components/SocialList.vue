<template>
  <div class="social-list">
    <SocialItem
      v-for="(social, index, key) of socials"
      :key="key"
      :social="social"
      class="social-item"
      :class="index"
    />
  </div>
</template>

<script>
import SocialItem from './SocialItem.vue';

import InstagramLogo from '../assets/img/instagram.svg';
import TwitterLogo from '../assets/img/twitter.svg';
import GitHubLogo from '../assets/img/github.png';
import LinkedInLogo from '../assets/img/linkedin.png';

export default {
  name: 'SocialList',
  components: { SocialItem },
  data: () => ({
    socials: {
      instagram: {
        network: 'Instagram',
        link: 'https://instagram.com/Untanky',
        handle: '@Untanky',
        imageURI: InstagramLogo,
      },
      github: {
        network: 'GitHub',
        link: 'https://github.com/Untanky',
        handle: 'Untanky',
        imageURI: GitHubLogo,
      },
      linkedIn: {
        network: 'LinkedIn',
        link: 'https://linkedin.com/in/lukasgrimm',
        handle: 'Lukas Grimm',
        imageURI: LinkedInLogo,
      },
      twitter: {
        network: 'Twitter',
        link: 'https://twitter.com/Untanky',
        handle: '@Untanky',
        imageURI: TwitterLogo,
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
