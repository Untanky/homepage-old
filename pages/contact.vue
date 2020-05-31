<template>
  <div>
    <div class="content-wrapper">
      <h1>Contact</h1>
      <card
        :footerBorder="false"
      >
        <template
          slot="header"
        >
          <h3 class="title">
            Contact data
          </h3>
        </template>
        <div
          v-if="error"
        >
          There was an error
        </div>
        <div
          v-else
        >
          <ContactInfo
            :contact="contact"
          />
        </div>
      </card>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

import Card from '../components/Card.vue';
import ContactInfo from '../components/ContactInfo.vue';

export default {
  components: {
    Card,
    ContactInfo,
  },
  data: () => ({
    error: false,
  }),
  asyncData() {
    return axios.get(`${process.env.VUE_APP_API_HOST}/contact.json`)
      .then((res) => ({
        contact: res.data,
      }))
      .catch(() => ({ error: true }));
  },
  head: () => ({
    title: 'Lukas Grimm - Contact',
  }),
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  max-width: 600px;
  text-align: left;
  margin: 0 auto;

  h1 {
    text-align: center;
  }

  .title {
    text-align: left;
    font-weight: 800;
    margin: 0;
  }
}
</style>
