<i18n>
{
  "en": {
    "companyPre": "at"
  },
  "de": {
    "companyPre": "bei"
  }
}
</i18n>

<template>
  <TimelineItem
    :start-date="startDate"
    :end-date="endDate"
  >
    <div class="experience-info">
      <div class="job-title">
        <b>{{ item.jobTitle }}</b>
      </div>
      <div class="company">
        {{ $t('companyPre') }}
        <a :href="item.link">{{ item.company }}</a>
      </div>
      <div class="description">
        {{ item.description }}
      </div>
    </div>
  </TimelineItem>
</template>

<script>
import { DateTime } from 'luxon';
import TimelineItem from './TimelineItem.vue';

const dateFormat = { year: 'numeric', month: 'long', day: '2-digit' };

export default {
  name: 'ExperienceItem',
  components: { TimelineItem },
  props: {
    item: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  computed: {
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
.experience-info {
  *:not(:first-child) {
    padding-top: 0.25em;
  }
}
</style>
