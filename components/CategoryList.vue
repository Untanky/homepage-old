<template>
  <div class="category-list">
    <SkillCategory
      v-for="(category, categoryName, index) of skillsByCategory"
      :key="index"
      :category="category"
    />
  </div>
</template>

<script>
import _ from 'lodash'
import SkillCategory from './SkillCategory.vue'

export default {
  name: 'SkillsList',
  components: {
    SkillCategory
  },
  props: {
    list: {
      type: Array,
      default: () => [],
      required: false
    },
    categories: {
      type: Array,
      default: () => [],
      required: false
    }
  },
  computed: {
    skillsByCategory () {
      const categories = _.chain(this.list)
        .reduce((prev, curr) => {
          const next = { ...prev }
          _.forEach(curr.categories, (category) => {
            if (!prev[category]) {
              next[category] = { name: category, skills: [] }
            }
            next[category].skills.push({ name: curr.name, rating: curr.rating })
          })
          return next
        }, {})
        .map(curr => ({
          ...curr,
          ..._.find(this.categories, cat => cat.name === curr.name)
        }))
        .value()

      return categories
    }
  }
}
</script>

<style lang="scss" scoped>
.category-list {
  display: grid;
  padding: 1em;

  @media screen and (min-width: 819px) {
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }
}
</style>
