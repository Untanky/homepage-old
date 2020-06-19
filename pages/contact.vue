<i18n>
{
  "en": {
    "contactForm": "Contact Form",
    "contactData": "Contact Data"
  },
  "de": {
    "contactForm": "Kontaktanfrage",
    "contactData": "Kontaktdaten"
  }
}
</i18n>

<template>
  <div>
    <div class="content-wrapper">
      <Title>{{ $t('pages.contact') }}</Title>
      <card
        class="card"
        :footerBorder="false"
      >
        <template
          slot="header"
        >
          <h3 class="title">
            {{ $t('contactForm') }}
          </h3>
        </template>
        <contact-form />
      </card>
      <card
        class="card"
        :footerBorder="false"
      >
        <template
          slot="header"
        >
          <h3 class="title">
            {{ $t('contactData') }}
          </h3>
        </template>
        <div
          v-if="error"
        >
          {{ $t('error') }}
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

import Title from '../components/Title.vue';
import Card from '../components/Card.vue';
import ContactForm from '../components/ContactForm.vue';
import ContactInfo from '../components/ContactInfo.vue';

export default {
  components: {
    Title,
    Card,
    ContactForm,
    ContactInfo,
  },
  data: () => ({
    error: false,
  }),
  asyncData(ctx) {
    return axios.get(`${process.env.VUE_APP_API_HOST}/${ctx.app.i18n.locale}/contact.json`)
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

  h3 {
    text-align: left;
    margin: 0;
  }

  .card {
    margin-top: 4em;
  }
}
</style>
