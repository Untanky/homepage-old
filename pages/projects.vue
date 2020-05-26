<template>
  <div>
    <h1 class="title">
      Projects
    </h1>
    <div
      v-if="error"
    >
      There was an error
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
  asyncData() {
    return axios.get(`${process.env.VUE_APP_API_HOST}/projects.json`)
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
