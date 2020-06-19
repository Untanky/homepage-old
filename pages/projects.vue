<template>
  <div>
    <Title>
      {{ $t('pages.projects') }}
    </Title>
    <div
      v-if="error"
    >
      {{ $t('error') }}
    </div>
    <div
      v-else
    >
      <project-list :projects="projects"/>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

import Title from '../components/Title.vue';
import ProjectList from '../components/ProjectList.vue';

export default {
  components: {
    Title,
    ProjectList,
  },
  asyncData(ctx) {
    return axios.get(`${process.env.VUE_APP_API_HOST}/${ctx.app.i18n.locale}/projects.json`)
      .then(({ data }) => ({ projects: data }))
      .catch(() => ({ error: true }));
  },
  data: () => ({
    error: false,
  }),
  head: () => ({
    title: 'Lukas Grimm - Projects',
  }),
};
</script>
