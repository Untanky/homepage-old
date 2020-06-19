<i18n>
{
  "en": {
    "tmg": "Information in accordance with Section 5 TMG",
    "represented": "Represented by",
    "contactInformation": "Contact Information",
    "telephone": "Telephone",
    "email": "E-Mail"
  },
  "de": {
    "tmg": "Angaben gemäß § 5 TMG",
    "represented": "Vertreten durch",
    "contactInformation": "Kontaktdaten",
    "telephone": "Telefon",
    "email": "E-Mail"
  }
}
</i18n>

<template>
  <main class="imprint">
    <h1>{{ $t('pages.imprint') }}</h1>
    {{ $t('tmg') }}<br><br>

    Lukas Grimm <br>
    Britzer Damm 41 <br>
    12347 Berlin <br>
    Germany <br><br>

    <b>{{ $t('represented') }}</b><br>
    Lukas Grimm

    <h2>{{ $t('contactInformation') }}</h2>
    {{$t('telephone')}}: +49 1512 910 2880<br>
    {{$t('email')}}: <a href="mailto:lukaskingsmail@gmail.com">lukaskingsmail@gmail.com</a><br>

  </main>
</template>

<style lang="scss" scoped>
.imprint {
  text-align: left;
  max-width: 900px;
  margin: 0 auto;
}
</style>
