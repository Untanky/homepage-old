<template>
  <main class="data-protection">
    <h1>{{ $t('pages.dataProtection') }}</h1>
    <h2>{{ $t('dataProtection.general.title') }}</h2>
    <h3>{{ $t('dataProtection.reason') }}</h3>
    <div v-html="$t('dataProtection.general.reason')"/>
    <h3>{{ $t('dataProtection.legal') }}</h3>
    <div v-html="$t('dataProtection.general.legal')"/>
    <h3>{{ $t('dataProtection.receiver') }}</h3>
    <div v-html="$t('dataProtection.general.receiver')"/>
    <h3>{{ $t('dataProtection.duration') }}</h3>
    <div v-html="$t('dataProtection.general.duration')"/>
    <h3>{{ $t('dataProtection.accept') }}</h3>
    <div v-html="$t('dataProtection.general.accept')"/>
    <h2>{{ $t('dataProtection.contact.title') }}</h2>
    <h3>{{ $t('dataProtection.reason') }}</h3>
    <div v-html="$t('dataProtection.contact.reason')"/>
    <h3>{{ $t('dataProtection.legal') }}</h3>
    <div v-html="$t('dataProtection.contact.legal')"/>
    <h3>{{ $t('dataProtection.receiver') }}</h3>
    <div v-html="$t('dataProtection.contact.receiver')"/>
    <h3>{{ $t('dataProtection.duration') }}</h3>
    <div v-html="$t('dataProtection.contact.duration')"/>
    <h3>{{ $t('dataProtection.accept') }}</h3>
    <div v-html="$t('dataProtection.contact.accept')"/>
    <h2>{{ $t('dataProtection.script.title') }}</h2>
    <h3>{{ $t('dataProtection.reason') }}</h3>
    <div v-html="$t('dataProtection.script.reason')"/>
    <h3>{{ $t('dataProtection.legal') }}</h3>
    <div v-html="$t('dataProtection.script.legal')"/>
    <h3>{{ $t('dataProtection.receiver') }}</h3>
    <div v-html="$t('dataProtection.script.receiver')"/>
    <h3>{{ $t('dataProtection.duration') }}</h3>
    <div v-html="$t('dataProtection.script.duration')"/>
    <h3>{{ $t('dataProtection.transfer') }}</h3>
    <div v-html="$t('dataProtection.script.transfer')"/>
    <h3>{{ $t('dataProtection.accept') }}</h3>
    <div v-html="$t('dataProtection.script.accept')"/>
    <h3>{{ $t('dataProtection.cancelation') }}</h3>
    <div v-html="$t('dataProtection.script.cancelation')"/>
    <h2>{{ $t('dataProtection.ssl.title') }}</h2>
    <div v-html="$t('dataProtection.ssl.text')"/>
    <h2>{{ $t('dataProtection.change.title') }}</h2>
    <div v-html="$t('dataProtection.change.text')"/>
  </main>
</template>

<style lang="scss" scoped>
.data-protection {
  text-align: left;
  max-width: 900px;
  margin: 0 auto;
}
</style>
