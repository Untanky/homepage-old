<template>
  <div class="contact-info">
    <div class="main-contact">
      <div class="phone container">
        <div class="icon">
          <i class="material-icons">phone</i>
        </div>
        <div class="info">
          <a :href="`tel://${contact.phone}`">
            {{ contact.phone }}
          </a>
        </div>
      </div>
      <div class="email container">
        <div class="icon">
          <i class="material-icons">mail</i>
        </div>
        <div class="info">
          <a :href="`mailto://${contact.email}`">
            {{ contact.email }}
          </a>
        </div>
      </div>
      <div class="contact-form container">
        <div class="icon">
          <i class="material-icons">message</i>
        </div>
        <div class="info">
          <a :href="`http://contact.link`">
            Contact Form
          </a>
        </div>
      </div>
    </div>
    <div class="address container">
      <div class="icon">
        <i class="material-icons">place</i>
      </div>
      <div class="info">
        <div class="name">
          {{ contact.name }}
        </div>
        <div class="street">
          {{ contact.address.street }}
        </div>
        <div class="city">
          {{ contact.address.zip }} {{ contact.address.city }}
        </div>
        <div class="country">
          {{ contact.address.country }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo',
  props: {
    contact: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-info {
  padding: 1em;

  @media screen and (min-width: 819px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }

  &:not(:last-child) {
    background-color: red;
  }

  .container {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 24px;
    grid-gap: 0.5em 0.5em;
    margin-bottom: 0.5em;

    .icon {
      height: 24px;
      column-span: 1 / span 1;
      height: 24px;
    }

    .info {
      column-span: 2 / span 1;
      align-self: center;
    }

    @media screen and (min-width: 819px) {
      &:last-child {
        margin-bottom: 0;
      }
    }

    &.address {
      @media screen and (min-width: 819px) {
        margin-bottom: 0;
      }

      .info {
        align-self: start;
      }
    }
  }

  .address {
    grid-template-rows: auto;
    .info {
      align-self: top;
    }
  }
}
</style>
