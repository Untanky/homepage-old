<i18n>
{
  "en": {
    "name": "Name",
    "email": "E-mail",
    "message": "Message",
    "placeholder": {
      "name": "John Doe",
      "email": "john.doe@domain.com",
      "message": "Your message"
    },
    "sendCopy": "Send copy of message to your email",
    "submit": "Submit",
    "requiredHint": "* required"
  },
  "de": {
    "name": "Name",
    "email": "E-Mail",
    "message": "Nachricht",
    "placeholder": {
      "name": "Max Mustermann",
      "email": "max.mustermann@domain.com",
      "message": "Ihre Nachricht"
    },
    "sendCopy": "Schicke eine Kopie der Nachricht an Ihre Email-Adresse",
    "submit": "Abschicken",
    "requiredHint": "* Pflichtfelder"
  }
}
</i18n>

<template>
  <form>
    <text-input
      id="name"
      :label="$t('name')"
      :placeholder="$t('placeholder.name')"
      :fullWidth="true"
      v-model="name"
    />
    <text-input
      id="email"
      :label="$t('email')"
      :placeholder="$t('placeholder.email')"
      :fullWidth="true"
      v-model="email"
    />
    <text-input
      id="message"
      :label="$t('message')"
      :placeholder="$t('placeholder.message')"
      :fullWidth="true"
      :rows="8"
      v-model="message"
    />
    <checkbox
      id="send-copy"
      class="indent"
      :label="$t('sendCopy')"
      v-model="sendCopy"
    />
    <button-input
      type="gradient"
      class="block"
      :disabled="!canSend"
      @click="sendEmail"
    >
      {{ $t('submit') }}
    </button-input>

    <div class="indent">
      {{ $t('requiredHint') }}
    </div>
  </form>
</template>

<script>
import axios from 'axios';

import TextInput from './TextInput.vue';
import ButtonInput from './ButtonInput.vue';
import Checkbox from './Checkbox.vue';

export default {
  name: 'ContactForm',
  data: () => ({
    name: '',
    email: '',
    message: '',
    sendCopy: '',
  }),
  components: {
    TextInput,
    ButtonInput,
    Checkbox,
  },
  computed: {
    canSend() {
      return this.name !== '' && this.email !== '';
    },
  },
  methods: {
    sendEmail() {
      axios.post('/api/v1/mail', {
        name: this.name,
        email: this.email,
        content: this.message,
        sendCopy: this.sendCopy,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  box-sizing: border-box;
  padding: 1em;

  > *:not(:first-child) {
    margin-top: 1em;
  }

  .block {
    display: block;
    margin-top: 1em;
  }

  .indent {
    margin-left: 1em;
  }
}
</style>
