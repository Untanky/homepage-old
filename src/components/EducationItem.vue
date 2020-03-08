<template>
  <div class="education-item">
    <span />
    <div class="education-info">
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
    <div class="duration-wrapper">
      <div class="time">
        {{ startDate }}
      </div>
      <div class="time">
        {{ endDate }}
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon';

const dateFormat = { year: 'numeric', month: 'long' };

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
    startDate() {
      return DateTime
        .fromObject(this.item.startDate)
        .toLocaleString(dateFormat);
    },
    endDate() {
      const { endDate, finished } = this.item;

      if (finished && endDate) {
        return DateTime
          .fromObject(this.item.endDate)
          .toLocaleString(dateFormat);
      }

      return 'now';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../_variables';

.education-item {
  position: relative;
  padding-top: 8px;
  margin-left: 135px;
  margin-bottom: 1em;

  &:not(:first-child) {
    margin-top: 60px;
  }

  > span { /* line */
    width: 2px;
    height: 100%;
    background: #000;
    left: -30px;
    top: 0;
    position: absolute;
    &:before,
    &:after {/* circles */
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 2px solid #000;
      position: absolute;
      background: $primary;
      left: -5px;
      top: 0;
    }

    &:after {
      top: 100%;
    }
  }

  .duration-wrapper {
    .time {
      position: absolute;
      left: -130px;
      width: 80px;
      text-align: right;
      font-size: 10px;
      font-weight: bold;
      padding: 0 0.5em;
      border-radius: 16px;
      &:first-child {
        top: 0;
      }
      &:last-child {
        top: 100%;
      }
    }
  }
}

.education-info {
  background-color: white;
  padding: 1em;
  border-radius: 12px;
  margin-top: 3px;
  margin-right: 1em;
}
</style>
