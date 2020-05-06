<template>
  <div class="portfolio">
    <h1 class="title">
      Portfolio
    </h1>
    <div
      v-if="error"
    >
      There was an error
    </div>
    <div
      v-else
    >
      <div class="category-wrapper">
        <h3 class="category-title">
          Education
        </h3>
        <EducationList :list="education" />
      </div>
      <div class="category-wrapper">
        <h3 class="category-title">
          Experience
        </h3>
        <ExperienceList :list="experience" />
      </div>
      <div class="category-wrapper">
        <h3 class="category-title">
          Skills
        </h3>
        <CategoryList
          :list="skills"
          :categories="categories"
        />
      </div>
      <div class="category-wrapper">
        <h3 class="category-title">
          Strenghts
        </h3>
        <StrengthList
          :strengths="strengths"
        />
      </div>
      <div class="category-wrapper">
        <h3 class="category-title">
          Contact
        </h3>
        <ContactInfo
          :contact="contact"
        />
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

import EducationList from '../components/EducationList.vue';
import ExperienceList from '../components/ExperienceList.vue';
import CategoryList from '../components/CategoryList.vue';
import StrengthList from '../components/StrengthList.vue';
import ContactInfo from '../components/ContactInfo.vue';

// const MAX_SKILL_RATING = 5;

export default {
  name: 'Portfolio',
  components: {
    EducationList,
    ExperienceList,
    CategoryList,
    StrengthList,
    ContactInfo,
  },
  asyncData() {
    const educationPromise = axios.get(`${process.env.VUE_APP_API_HOST}/portfolio/education`);
    const experiencePromise = axios.get(`${process.env.VUE_APP_API_HOST}/portfolio/experience`);
    const skillsPromise = axios.get(`${process.env.VUE_APP_API_HOST}/portfolio/skills`);
    const categoriesPromise = axios.get(`${process.env.VUE_APP_API_HOST}/portfolio/categories`);
    const strengthsPromise = axios.get(`${process.env.VUE_APP_API_HOST}/portfolio/strengths`);

    return Promise.all([
      educationPromise,
      experiencePromise,
      skillsPromise,
      categoriesPromise,
      strengthsPromise,
    ]).then((res) => ({
      education: res[0].data,
      experience: res[1].data,
      skills: res[2].data,
      categories: res[3].data,
      strengths: res[4].data,
    }))
      .catch(() => ({ error: true }));
  },
  data: () => ({
    error: false,
    contact: {
      name: 'Lukas Grimm',
      address: {
        street: 'Ahornallee 16',
        zip: '12555',
        city: 'Berlin',
        country: 'Germany',
      },
      phone: '+4915129102880',
      email: 'lukaskingsmail@gmail.com',
      link: '/contact',
    },
  }),
  head: () => ({
    title: 'Lukas Grimm - Portfolio',
  }),
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.title {
  text-align: center;
  font-weight: 800;
}

.category-wrapper {
  background-color: rgb(255, 255, 255);
  text-align: left;
  border-radius: $border-radius;
  box-shadow: $shadow;

  @media screen and (min-width: 819px) {
    width: 820px;
    margin: 0 auto;
  }

  .category-title {
    // background-color: $primary;
    // border-radius: $border-radius $border-radius 0 0;
    border-bottom: $border-primary;
    padding: 1em;
    border-radius: $border-radius $border-radius 0 0;
    margin-block-end: 0;
  }
}
</style>
