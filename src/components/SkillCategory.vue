<template>
  <div class="skill-category">
    <div class="skill-badge">
      <img
        class="badge-image"
        :src="skills.badgeImageURI"
        :alt="skills.name"
      >
    </div>
    <div class="skill-list-wrapper">
      <div class="badge-title">
        <b>{{ skills.name }}</b>
      </div>
      <div class="badge-description">
        {{ skills.description }}
      </div>
      <div class="skill-list">
        <span
          v-for="(skill, index) in skills.skills"
          :key="index"
          class="skill"
        >
          {{ skill.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillCategory',
  props: {
    // category: {
    //   type: String,
    //   required: true,
    //   default: () => '',
    // },
    skills: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../_variables";

.skill-category {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 1em 1em;
  margin-bottom: 1em;

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

      .skill {
        display: inline-block;
        background-color: rgb(250, 250, 250);
        padding: 0.125em 1em;
        border-radius: 16px;
        margin-right: 0.5em;
        margin-bottom: 0.5em;
        box-shadow: $shadow;
      }
    }
  }
}
</style>
