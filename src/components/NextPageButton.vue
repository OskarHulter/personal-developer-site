<script setup lang="ts">
import { usePageRouter } from '~/composables'

const { nextPage, goToNextPage } = usePageRouter()
const { t } = useI18n()

</script>

<template>
  <div>
    <button class="m-3 text-sm btn" @click="goToNextPage">
      {{ t(nextPage.name) }}
    </button>
  </div>
</template>
