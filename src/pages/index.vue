<script setup lang="ts">
const { t } = useI18n()
</script>


<template>
  <Suspense>
    <template #default>
      <div>
        <p class="text-4xl">
          <carbon-campsite class="inline-block" />
        </p>
        <h1>
          <a rel="noreferrer" href="https://github.com/OskarHulter" target="_blank">Oskar Hulter</a>
        </h1>

        <p>
          <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
        </p>
      </div>
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>
