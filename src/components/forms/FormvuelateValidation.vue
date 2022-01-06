
<script lang="ts" setup>

import { SchemaFormFactory } from 'formvuelate'
import VeeValidatePlugin from '@formvuelate/plugin-vee-validate'

const SchemaFormWithValidation = SchemaFormFactory([
  VeeValidatePlugin({
    // plugin configuration here
  })
])

</script>

<template>
  <template>
  <div id="app">
    <SchemaFormWithValidation :schema="mySchema" />
  </div>
</template>