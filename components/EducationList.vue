<template>
  <div class="education-list">
    <EducationItem
      v-for="(item, index) in list"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import EducationItem from './EducationItem.vue'

export default {
  name: 'EducationList',
  components: {
    EducationItem
  },
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.education-list {
  padding: 1em;
}
</style>
