<template>
  <div>
    <h1 class="title">
      Projects
    </h1>
    <project-list :projects="projects"/>
  </div>
</template>

<script>
import ProjectList from '../components/ProjectList.vue';

export default {
  components: {
    ProjectList,
  },
  data: () => ({
    projects: [
      {
        title: 'Project 1',
        tags: [
          'Vue.js',
          'UI/UX',
          'Frontend',
        ],
      },
      {
        title: 'Project 2',
        tags: [
          'Vue.js',
          'UI/UX',
          'Frontend',
        ],
      },
      {
        title: 'Project 3',
        tags: [
          'Vue.js',
          'UI/UX',
          'Frontend',
        ],
      },
    ],
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
