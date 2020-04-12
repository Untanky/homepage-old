<template>
  <div class="blog-post">
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
        :layout="section.layout"
        :type="section.type"
        :content="section.content"
      />
    </article>
  </div>
</template>

<script>
import { DateTime } from 'luxon';

import PostSection from './PostSection.vue';

import article from '../article.test.json';

// eslint-disable-next-line no-unused-vars
export const MediaTypes = {
  SECTION: 'TITLE',
  TEXT: 'TEXT',
  VIDEO: 'YOUTUBE_VIDEO',
  IMAGE: 'IMAGE',
  CODE: 'CODE',
  LINK: 'LINK',
};

export default {
  name: 'BlogPost',
  components: {
    PostSection,
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
@import "../assets/scss/variables";
@import "../assets/scss/responsive";

$single-width: 600px;
$double-width: 900px;

.blog-post {
  background-color: white;
  max-width: 1000px;
  border-radius: $border-radius;
  padding: 2em 1em 0.25em;
  margin: 0 auto;
  margin-bottom: 72px;
  box-shadow: $shadow;

  @include tablet-up {
    margin-top: 64px;
    margin-bottom: 0;
  }

  header {
    .title {
      font-size: 44px;
      text-align: center;

      @include tablet-up {
        margin: 1em 0;
      }

      @include laptop-up {
        margin: 2em 0;
      }
    }

    .meta-data {
      padding: 0.5em 0;
      border-bottom: $border-primary;
      margin: 0 auto;

      @include tablet-up {
        max-width: $single-width;
      }

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
