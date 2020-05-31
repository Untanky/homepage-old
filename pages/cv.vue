<i18n>
{
  "en": {
    "education": "Education",
    "experience": "Exprience",
    "skills": "Skills",
    "strengths": "Strengths",
    "contactData": "Contact data"
  },
  "de": {
    "education": "Ausbildung",
    "experience": "Erfahrung",
    "skills": "Fähigkeiten",
    "strengths": "Stärken",
    "contactData": "Kontaktdaten"
  }
}
</i18n>

<template>
  <div class="portfolio">
    <h1 class="title">
      {{ $t('pages.cv') }}
    </h1>
    <div
      v-if="error"
    >
      {{ $t('error') }}
    </div>
    <div
      v-else
    >
      <card :footerBorder="false">
        <template slot="header">
          <h3 class="category-title">
            {{ $t('education') }}
          </h3>
        </template>

        <EducationList :list="education" />
      </card>
      <card :footerBorder="false">
        <template slot="header">
          <h3 class="category-title">
            {{ $t('experience') }}
          </h3>
        </template>

        <ExperienceList :list="experience" />
      </card>
      <card :footerBorder="false">
        <template slot="header">
          <h3 class="category-title">
            {{ $t('skills') }}
          </h3>
        </template>

        <CategoryList
          :list="skills"
          :categories="categories"
        />
      </card>
      <card :footerBorder="false">
        <template slot="header">
          <h3 class="category-title">
            {{ $t('strengths') }}
          </h3>
        </template>

        <StrengthList :strengths="strengths" />
      </card>
      <card :footerBorder="false">
        <template slot="header">
          <h3 class="category-title">
            {{ $t('contactData') }}
          </h3>
        </template>

        <ContactInfo :contact="contact" />
      </card>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

import Card from '../components/Card.vue';
import EducationList from '../components/EducationList.vue';
import ExperienceList from '../components/ExperienceList.vue';
import CategoryList from '../components/CategoryList.vue';
import StrengthList from '../components/StrengthList.vue';
import ContactInfo from '../components/ContactInfo.vue';

// const MAX_SKILL_RATING = 5;

export default {
  name: 'Portfolio',
  components: {
    Card,
    EducationList,
    ExperienceList,
    CategoryList,
    StrengthList,
    ContactInfo,
  },
  asyncData(ctx) {
    const educationPromise = axios.get(`${process.env.VUE_APP_API_HOST}/${ctx.app.i18n.locale}/education.json`);
    const experiencePromise = axios.get(`${process.env.VUE_APP_API_HOST}/${ctx.app.i18n.locale}/experience.json`);
    const skillsPromise = axios.get(`${process.env.VUE_APP_API_HOST}/${ctx.app.i18n.locale}/skills.json`);
    const categoriesPromise = axios.get(`${process.env.VUE_APP_API_HOST}/${ctx.app.i18n.locale}/categories.json`);
    const strengthsPromise = axios.get(`${process.env.VUE_APP_API_HOST}/${ctx.app.i18n.locale}/strengths.json`);
    const contactPromise = axios.get(`${process.env.VUE_APP_API_HOST}/${ctx.app.i18n.locale}/contact.json`);

    return Promise.all([
      educationPromise,
      experiencePromise,
      skillsPromise,
      categoriesPromise,
      strengthsPromise,
      contactPromise,
    ]).then((res) => ({
      education: res[0].data,
      experience: res[1].data,
      skills: res[2].data,
      categories: res[3].data,
      strengths: res[4].data,
      contact: res[5].data,
    }))
      .catch(() => ({ error: true }));
  },
  data: () => ({
    error: false,
  }),
  head: () => ({
    title: 'Lukas Grimm - Portfolio',
  }),
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";


.portfolio {
  text-align: left;

  @media screen and (min-width: 819px) {
    width: 820px;
    margin: 0 auto;
  }

  .title {
    text-align: center;
    font-weight: 800;
    margin-bottom: 3em;
  }

  h3 {
    margin: 0;
  }

  .card {
    margin-bottom: 3em;
  }
}
</style>
