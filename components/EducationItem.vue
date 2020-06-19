<i18n>
{
  "en": {
    "grade": "grade"
  },
  "de": {
    "grade": "Note"
  }
}
</i18n>

<template>
  <TimelineItem
    :start-date="startDate"
    :end-date="endDate"
  >
    <div class="education-info">
      <div class="school">
        <a :href="item.link"><b>{{ item.school }}</b></a>
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
  </TimelineItem>
</template>

<script>
import { DateTime } from 'luxon';
import TimelineItem from './TimelineItem.vue';

const dateFormat = { year: 'numeric', month: 'long' };

export default {
  name: 'EducationItem',
  components: { TimelineItem },
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
        result += ` (${this.$t('grade')}: ${grade})`;
      }

      return result;
    },
    startDate() {
      return DateTime
        .fromObject(this.item.startDate)
        .setLocale(this.$i18n.locale)
        .toLocaleString(dateFormat);
    },
    endDate() {
      const { endDate, finished } = this.item;

      if (finished && endDate) {
        return DateTime
          .fromObject(this.item.endDate)
          .setLocale(this.$i18n.locale)
          .toLocaleString(dateFormat);
      }

      return 'now';
    },
  },
};
</script>

<style lang="scss" scoped>
.education-list {
  *:not(:first-child) {
    padding-top: 0.25em;
  }
}
</style>
