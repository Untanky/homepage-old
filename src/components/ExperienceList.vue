<template>
  <div class="experience-list">
    <ExperienceItem
      v-for="(item, index) in list"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import ExperienceItem from './ExperienceItem.vue';

export default {
  name: 'ExperienceList',
  components: { ExperienceItem },
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.experience-list {
  padding: 1em;
}
</style>
