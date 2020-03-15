<template>
  <div class="portfolio">
    <h1 class="title">
      Portfolio
    </h1>
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
      <p>Strengths</p>
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
</template>

<script>
import EducationList from '../components/EducationList.vue';
import ExperienceList from '../components/ExperienceList.vue';
import CategoryList from '../components/CategoryList.vue';
import ContactInfo from '../components/ContactInfo.vue';

// const MAX_SKILL_RATING = 5;

export default {
  name: 'Portfolio',
  components: {
    EducationList,
    ExperienceList,
    CategoryList,
    ContactInfo,
  },
  data: () => ({
    education: [
      {
        school: 'Heinrich-Hertz-Oberschule Berlin',
        address: {
          street: 'Rigaer Straße 81-82',
          zip: '10247',
          city: 'Berlin',
          country: 'Germany',
        },
        degree: 'Abitur',
        course: null,
        grade: '1.8',
        type: 'HIGH_SCHOOL',
        link: 'https://htw-berlin.de',
        description: 'Leistungskurse: Informatik/Mathematik',
        finished: true,
        startDate: {
          year: 2011,
          month: 9,
        },
        endDate: {
          year: 2017,
          month: 7,
        },
      },
      {
        school: 'Hochschule für Technik und Wirtschaft Berlin',
        address: {
          street: 'Wilhelminenhofstraße 75',
          zip: '12439',
          city: 'Berlin',
          country: 'Germany',
        },
        degree: 'Bachelor of Science',
        course: 'Angewandte Informatik',
        grade: null,
        type: 'UNIVERSITY',
        link: 'https://htw-berlin.de',
        description: '',
        finished: false,
        startDate: {
          year: 2017,
          month: 10,
          day: 1,
        },
        endDate: {
          year: 2020,
          month: 9,
          day: 30,
        },
      },
    ],
    experience: [
      {
        jobTitle: 'Studentische Hilfskraft',
        company: 'Hochschule für Technik und Wirtschaft Berlin',
        address: {
          street: 'Wilhelminenhofstraße 75',
          zip: '12439',
          city: 'Berlin',
          country: 'Germany',
        },
        description: 'Hausaufgabenkontrolle und Tutorium im Fach "Theoretische Grundlagen der Informatik"',
        link: 'https://htw-berlin.de',
        finished: false,
        startDate: {
          year: 2018,
          month: 10,
          day: 1,
        },
        endDate: {
          year: 2020,
          month: 7,
          day: 15,
        },
      },
      {
        jobTitle: 'Software Engineering Intern',
        company: 'WBS Coding School',
        address: {
          street: 'Lorenzweg 5',
          zip: '12099',
          city: 'Berlin',
          country: 'Germany',
        },
        description: 'Entwicklung einer Lernplattform mit React im Frontend und NodeJS im Backend',
        link: 'https://wbscodingschool.com',
        finished: false,
        startDate: {
          year: 2020,
          month: 2,
          day: 16,
        },
        endDate: {
          year: 2020,
          month: 5,
          day: 15,
        },
      },
    ],
    skills: [
      {
        name: 'HTML',
        categories: ['Web', 'Languages', 'Frontend'],
        rating: 5,
      },
      {
        name: 'CSS',
        categories: ['Web', 'UI', 'Frontend'],
        rating: 5,
      },
      {
        name: 'JavaScript',
        categories: ['Web', 'Languages', 'Frontend'],
        rating: 5,
      },
      {
        name: 'React.js',
        categories: ['Web', 'Frameworks', 'Frontend'],
        rating: 5,
      },
      {
        name: 'Vue.js',
        categories: ['Web', 'Frameworks', 'Frontend'],
        rating: 4,
      },
      {
        name: 'Node.js',
        categories: ['API', 'Backend', 'Languages'],
        rating: 5,
      },
      {
        name: 'Express',
        categories: ['API', 'Backend', 'Frameworks'],
        rating: 4,
      },
    ],
    categories: [
      {
        name: 'Web',
        description: 'Short description about web development and stuff',
        badgeImageURI: 'https://i.ya-webdesign.com/images/badge-vector-png-4.png',
      },
      {
        name: 'Languages',
        description: 'The programming lanaguages that I know',
        badgeImageURI: 'https://i.ya-webdesign.com/images/badge-vector-png-4.png',
      },
      {
        name: 'Frontend',
        description: 'Frontend technologies I know',
        badgeImageURI: 'https://i.ya-webdesign.com/images/badge-vector-png-4.png',
      },
      {
        name: 'UI',
        description: 'User Interface Design and stuff',
        badgeImageURI: 'https://i.ya-webdesign.com/images/badge-vector-png-4.png',
      },
      {
        name: 'Frameworks',
        description: 'Frameworks that I know how to use',
        badgeImageURI: 'https://i.ya-webdesign.com/images/badge-vector-png-4.png',
      },
      {
        name: 'API',
        description: 'API technologies I know',
        badgeImageURI: 'https://i.ya-webdesign.com/images/badge-vector-png-4.png',
      },
      {
        name: 'Backend',
        description: 'Backend stuff',
        badgeImageURI: 'https://i.ya-webdesign.com/images/badge-vector-png-4.png',
      },
    ],
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
      link: 'lukasgrimm.me/contact',
    },
  }),
};
</script>

<style lang="scss" scoped>
@import "../_variables.scss";

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
    border-bottom: 2px solid $primary;
    padding: 1em;
    border-radius: $border-radius $border-radius 0 0;
    margin-block-end: 0;
  }
}
</style>
