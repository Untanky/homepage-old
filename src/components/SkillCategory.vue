<template>
  <div class="skill-category">
    <div class="skill-badge">
      <img
        class="badge-image"
        :alt="category"
      >
    </div>
    <div class=skill-list-wrapper>
      <div class="badge-title">
        <b>{{ category }}</b>
      </div>
      <div class="skill-list">
        <span
          v-for="(skill, index) in skills"
          :key="index"
          class="skill"
        >
          {{ skill.name }} {{ skill.rating }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillCategory',
  props: {
    category: {
      type: String,
      required: true,
      default: () => '',
    },
    skills: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.skill-category {
  .skill-badge{
    display: inline-block;
    text-align: center;
    width: 64px;
    height: 64px;

    .badge-image {
      display: block;
      width: 64px;
      height: 64px;
    }
  }

  .skill-list-wrapper {
    .badge-title {
      font-size: 20px;
    }

    display: inline-block;
    max-width: 628px;
    .skill-list {
      width: 100%;
    }
  }
}
</style>
