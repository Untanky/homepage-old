<template>
  <form>
    <text-input
      label="Name *"
      id="name"
      placeholder="Paul Smith"
      :fullWidth="true"
      v-model="name"
    />
    <text-input
      label="E-mail *"
      id="email"
      placeholder="you@domain.com"
      :fullWidth="true"
      v-model="email"
    />
    <text-input
      label="Message"
      id="message"
      placeholder="Your message"
      :fullWidth="true"
      :rows="8"
      v-model="message"
    />
    <checkbox
      label="Send copy to your email"
      id="send-copy"
      class="indent"
      v-model="sendCopy"
    />
    <button-input
      type="gradient"
      class="block"
      :disabled="!canSend"
      @click="sendEmail"
    >
      Submit
    </button-input>

    <div class="indent">
      * required
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
