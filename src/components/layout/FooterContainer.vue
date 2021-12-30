<script setup lang="ts">

const { t } = useI18n()

</script>

<template>
  <footer class="p-4 bg-blue-900">
    <nav class="text-xl">
      <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
        <carbon-campsite />
      </router-link>
      <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
        <carbon-dicom-overlay />
      </router-link>

      <a
        class="icon-btn mx-2"
        rel="noreferrer"
        href="https://github.com/OskarHulter"
        target="_blank"
        title="GitHub"
      >
        <carbon-logo-github />
      </a>
    </nav>
  </footer>
</template>
