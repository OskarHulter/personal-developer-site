<script setup lang="ts">
// import { useUserStore } from '~/stores/user'

// const user = useUserStore()
// const name = ref(user.savedName)

const { t } = useI18n()
</script>

<template>
  <div>
    <toggle-menu />
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <h1>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">Oskar Hulter</a>
    </h1>

    <p>
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>

    <div class="py-4" />
    <next-page-button />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
