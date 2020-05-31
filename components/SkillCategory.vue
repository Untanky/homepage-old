<template>
  <div class="skill-category">
    <div class="skill-badge">
      <img
        class="badge-image"
        :src="category.badgeImageURI"
        :alt="category.name"
      >
    </div>
    <div class="skill-list-wrapper">
      <div class="badge-title">
        <b>{{ category.name }}</b>
      </div>
      <div class="badge-description">
        {{ category.description }}
      </div>
      <div class="skill-list">
        <badge
          v-for="(skill, index) in category.skills"
          :key="index"
          type="primary"
          class="skill"
        >
          {{ skill.name }}
        </badge>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from './Badge.vue';

export default {
  name: 'SkillCategory',
  components: {
    Badge,
  },
  props: {
    category: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.skill-category {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 1em 1em;

  .skill-badge{
    display: inline-block;
    text-align: center;
    width: 64px;
    height: 64px;

    .badge-image {
      display: block;
      width: 64px;
      height: 64px;
      background-color: white;
    }
  }

  .skill-list-wrapper {
    display: inline-block;
    max-width: 628px;

    * {
      margin: 0.25em 0;
    }

    .badge-title {
      font-size: 20px;
    }

    .skill-list {
      width: 100%;

      .badge {
        margin: 0.25em 0.25em 0.25em 0;
      }
    }
  }
}
</style>
