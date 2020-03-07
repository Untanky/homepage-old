<template>
  <div class="education-item">
    <div>
      {{ duration }}
    </div>
    <div class="school">
      {{ item.school }}
    </div>
    <div class="degreeText">
      {{ degree }}
    </div>
    <div
      v-if="item.description"
      class="description"
    >
      {{ item.description }}
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon';

export default {
  name: 'EducationItem',
  props: {
    item: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  computed: {
    degree() {
      const {
        degree, course, finished, grade,
      } = this.item;
      let result = degree;

      if (course) {
        result += `: ${course}`;
      }

      if (finished && grade) {
        result += ` (grade: ${grade})`;
      }

      return result;
    },
    duration() {
      const {
        startDate, endDate, finished,
      } = this.item;
      let result = '';

      const start = DateTime.fromObject(startDate).toLocaleString({ year: 'numeric', month: 'long' });
      const end = DateTime.fromObject(endDate).toLocaleString({ year: 'numeric', month: 'long' });

      result += `${start}`;

      if (finished && endDate) {
        result += ` - ${end}`;
      } else {
        result += ' - now';
      }

      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
.education-item {
  margin-bottom: 1em;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
