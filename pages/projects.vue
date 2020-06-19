<template>
  <div>
    <h1 class="title">
      {{ $t('pages.projects') }}
    </h1>
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

import ProjectList from '../components/ProjectList.vue';

export default {
  components: {
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

<style scoped>
.title {
  text-align: center;
  font-weight: 800;
}
</style>
