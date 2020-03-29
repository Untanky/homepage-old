<template>
  <div class="project-post">
    <header>
      <h1 class="title">
        {{ article.title }}
      </h1>
      <div class="meta-data">
        <div class="author">
          by {{ article.author }}
        </div>
        <div class="create date">
          Created at {{ createdDate }}
        </div>
        <div class="update date">
          Last updated at {{ updatedDate }}
        </div>
      </div>
    </header>
    <article>
      <post-section
        v-for="(section, index) in article.content"
        :key="index"
        :type="section.layout"
      >
        <post-content
          :type="section.type"
          :content="section.content"
        />
      </post-section>
    </article>
  </div>
</template>

<script>
import { DateTime } from 'luxon';

import PostSection from './PostSection.vue';
import PostContent from './PostContent.vue';

import article from '../article.test.json';

// eslint-disable-next-line no-unused-vars
const MediaTypes = {
  SECTION: 'TITLE',
  TEXT: 'TEXT',
  VIDEO: 'YOUTUBE_VIDEO',
  IMAGE: 'IMAGE',
  CODE: 'CODE',
  LINK: 'LINK',
};

export default {
  name: 'ProjectPost',
  components: {
    PostSection,
    PostContent,
  },
  data: () => ({
    article,
  }),
  computed: {
    createdDate() {
      return DateTime.fromISO(this.article.created).toLocaleString(DateTime.DATETIME_MED);
    },
    updatedDate() {
      return DateTime.fromISO(this.article.updated).toLocaleString(DateTime.DATETIME_MED);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../_variables.scss";

$single-width: 600px;
$double-width: 900px;

.project-post {
  box-sizing: border-box;
  max-width: $double-width;
  border-radius: $border-radius;
  margin: 0 auto;

  header {
    .title {
      font-size: 48px;
      text-align: center;
      margin: 4em 0 2em;
    }

    .meta-data {
      max-width: $single-width;
      padding: 0.5em;
      border-bottom: $border-primary;
      margin: 0 auto;

      .author {
        font-size: 20px;
        text-align: left;
      }

      .date {
        font-size: 12px;
        text-align: left;
      }
    }
  }

  article {
    text-align: justify;
  }
}
</style>
