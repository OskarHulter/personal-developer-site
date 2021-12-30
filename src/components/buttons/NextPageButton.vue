<script setup lang="ts">
import { usePageRouter } from '~/composables'

const { currPage, goToNextPage } = usePageRouter()
const { t } = useI18n()

</script>

<template>
  <BaseButton @click="goToNextPage">
    {{ t(currPage.next) }}
  </BaseButton>
</template>
