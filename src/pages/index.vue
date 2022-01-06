<script lang="ts" setup>
import { useDarkMode } from '~/utils'

useDarkMode()
</script>

<template>
  <Suspense>
    <template #default>
      <div class="container mx-auto px-6">
        <h1 class="text-6xl font-bold mb-2 text-secondary-text">
          <a rel="noreferrer" href="https://github.com/OskarHulter" target="_blank">Oskar Hulter</a>
        </h1>
        <h3 class="text-1xl text-primary-text">
          Fullstack Web Developer
        </h3>
        <BaseButton>Contact</BaseButton>
        <p>
          <em class="text-sm opacity-75">Focused on modern frontend JS stacks:</em>
        </p>
      </div>
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>
