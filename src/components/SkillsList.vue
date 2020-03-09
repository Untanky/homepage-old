<template>
  <div class="skills-list">
    <h1>Skill</h1>
    <p>{{ skillsByCategory }}</p>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'SkillsList',
  props: {
    list: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
  computed: {
    skillsByCategory() {
      const categories = _.chain(this.list)
        .reduce((prev, curr) => {
          console.log(prev);
          const next = { ...prev };
          _.forEach(curr.categories, (category) => {
            if (!prev[category]) {
              next[category] = [];
            }
            next[category].push({ name: curr.name, rating: curr.rating });
          });
          return next;
        }, {})
        .value();

      console.log(categories);
      return categories;
    },
  },
};
</script>

<style lang="scss" scoped>
.skills-list {
  padding: 1em;
}
</style>
