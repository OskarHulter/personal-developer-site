<script lang="ts">
import { getDefaultDarkMode, isServer } from '~/utils'

export default {
  setup() {
    if (!isServer())
      getDefaultDarkMode()
  },
}
</script>


<template>
  <LayoutContainer>
    <router-view />
    <div>
      <BackButton />
    </div>
  </LayoutContainer>
</template>
