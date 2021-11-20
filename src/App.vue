<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Oskar Hulter - Fullstack Web Developer',
  meta: [
    { name: 'description', content: 'Personal site of Oskar Hulter, fullstack developer specialized in Javascript.' },
  ],
})
</script>

<template>
  <router-view />
</template>
