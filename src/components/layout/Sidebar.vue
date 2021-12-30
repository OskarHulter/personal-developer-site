<template>
  <nav class="flex flex-col p-4 bg-blue-400 text-xl">
    <router-link class="icon-btn mx-2" to="/" :title="'home'">
      <carbon-campsite />
    </router-link>
    <router-link class="icon-btn mx-2" to="/about" :title="'about'">
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
</template>
