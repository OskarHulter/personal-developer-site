<script setup lang="ts">
import { usePageRouterStore } from '~/stores'

const { currPage, goToNextPage } = usePageRouterStore()
const { t } = useI18n()

</script>

<template>
  <div>
    <button class="m-3 text-sm btn" @click="goToNextPage">
      {{ t(currPage.next) }}
    </button>
  </div>
</template>
