<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()

</script>

<template>
  <BaseButton @click="router.back()">
    {{ t('button.back') }}
  </BaseButton>
</template>
