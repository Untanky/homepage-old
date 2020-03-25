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
      <PostSection type="single">
        <PostContent
          type="TEXT"
          :content="{text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam convallis arcu ipsum, nec ullamcorper tortor tristique porttitor.
          Cras a fermentum purus. Ut faucibus posuere maximus.
          Cras malesuada felis ut urna cursus consectetur. Nullam eget accumsan erat,
          sagittis hendrerit lorem. In hac habitasse platea dictumst. In placerat quam
          ut lacus pellentesque accumsan. Nunc venenatis velit id erat ultrices, vitae
          scelerisque ante luctus.`}"
        />
      </PostSection>
      <PostSection type="single">
        <PostContent
          type="SECTION"
          :content="{title: 'Title'}"
        />
      </PostSection>
      <PostSection type="single">
        <p class="section single">
          Vestibulum vitae gravida diam, sed imperdiet justo. Maecenas posuere libero
          ac molestie pulvinar. Donec venenatis tincidunt mauris quis ultricies. Donec
          feugiat, elit ac interdum consequat, justo felis condimentum dui, iaculis
          tincidunt lorem lacus et eros. Maecenas scelerisque ante a magna suscipit, in
          sodales augue malesuada. Integer viverra magna massa. Sed congue ligula leo,
          at laoreet eros lobortis in. Morbi consequat erat non risus suscipit pellentesque.
          Maecenas dictum molestie eros nec volutpat. Maecenas feugiat rutrum velit, eget
          pharetra purus interdum sed. Nunc lobortis pretium dolor vitae aliquet. Aliquam
          volutpat vel massa ut ultrices. Morbi sit amet urna eu enim rutrum dapibus dictum
          in magna. Donec egestas, ante faucibus porttitor fermentum, justo erat faucibus nisi,
          sit amet aliquet elit tortor ut purus. Suspendisse vitae cursus dui.
        </p>
      </PostSection>
      <PostSection type="single">
        <p class="section single">
          Nullam pharetra ac eros in dictum. Pellentesque magna nisi, tempor eu sodales sed,
          laoreet at tortor. Morbi eget pharetra augue, eget mollis nisl. Morbi eu tempus ante.
          Nullam laoreet ex a turpis mattis, sed rutrum diam luctus. Nulla eu nisl eu nunc
          rhoncus tristique. Ut ultrices sapien eu tincidunt iaculis.
        </p>
      </PostSection>
      <PostSection type="double">
        <img
          src="https://www.pride.com/sites/www.pride.com/files/styles/vertical_gallery_desktop_1x/public/2018/06/13/01-pride_flags.jpg?itok=W2cQgupQ&timestamp=1528927091"
        >
        <p>
          Donec fringilla risus eget lacinia malesuada. Pellentesque et porta leo, at varius odio.
          Integer vitae rutrum leo, in sagittis sem. Nunc massa neque, pulvinar et dui vitae,
          blandit pharetra erat. Pellentesque nec risus in nulla aliquet aliquet eu eu ligula.
          Pellentesque nisl dolor, fermentum a eleifend fermentum, tempor non turpis. Curabitur
          at ullamcorper quam, et sodales orci. Aenean non hendrerit mauris. Phasellus maximus
          tincidunt consequat. Cras bibendum neque blandit eros tincidunt, ac sollicitudin risus
          interdum. Nunc vel mi laoreet, hendrerit eros in, porttitor leo. Vivamus sit amet nulla
          at turpis malesuada porta. Phasellus et egestas leo.
        </p>
      </PostSection>
    </article>
  </div>
</template>

<script>
import { DateTime } from 'luxon';

import PostSection from './PostSection.vue';
import PostContent from './PostContent.vue';

// eslint-disable-next-line no-unused-vars
const MediaTypes = {
  SECTION: 'SECTION',
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
    article: {
      title: 'Test article with a very, very, very long title',
      author: 'Lukas Grimm',
      created: '2020-03-22T16:31:16+00:00',
      updated: '2020-03-22T17:13:56+00:00',
      content: [
        {
          type: 'TEXT_ONLY',
          text: 'Blah blah',
        },
        {
          type: 'MEDIA_ONLY',
          description: 'media',
        },
      ],
    },
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
