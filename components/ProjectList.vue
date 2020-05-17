<template>
  <div class="project-list">
    <project
      v-for="(project, index, key) in projects"
      :key="key"
      :project="project"
    />
  </div>
</template>

<script>
import Project from './Project.vue';

export default {
  name: 'ProjectList',
  components: {
    Project,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(196px, 512px));
  justify-content: center;
  align-content: center;
  gap: 2em;
  max-width: 1200px;
  padding: 1em;
  margin: 0 auto;
}
</style>
