<template>
  <div>
    <h4>Education List</h4>
    <EducationItem
      v-for="(item, index) in list"
      :key="index"
    />
  </div>
</template>

<script>
import EducationItem from './EducationItem.vue';

export default {
  name: 'EducationList',
  components: {
    EducationItem,
  },
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

</style>
