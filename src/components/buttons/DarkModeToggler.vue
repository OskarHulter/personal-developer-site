<script lang="ts" setup>
import { useDarkMode } from '~/utils'

const { current, toggle } = useDarkMode()

</script>

<template>
  <button class="icon-btn mx-2 !outline-none" :title="'button.toggle_dark'" @click="toggle()">
    <carbon-moon v-if="current === 'dark'" />
    <carbon-sun v-else />
  </button>
</template>
