<template>
  <div class="home">
    <introduction />
    <website-content
      :heading="$t('pages.cv')"
      :link-path="localePath('/cv')"
    >
      <div v-html="$t('homepageContent.portfolio')" />

      <template
        slot="footer"
      >
        <a
          class="action primary"
          :href="cvDownload"
          download
        >
          <span class="material-icons">
            cloud_download
          </span>
          Download
        </a>
      </template>
    </website-content>
    <website-content
      :heading="$t('pages.projects')"
      :link-path="localePath('/projects')"
    >
      <div v-html="$t('homepageContent.projects')" />
    </website-content>
    <website-content
      :heading="$t('pages.socials')"
      :link-path="localePath('/social')"
    >
      <div v-html="$t('homepageContent.socials')" />
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
  data: () => ({}),
  computed: {
    cvDownload() {
      console.log(this.$i18n.locale);
      return `data/${this.$i18n.locale}/cv.pdf`;
    },
  },
  head: () => ({
    title: 'Lukas Grimm - Homepage',
  }),
};
</script>
