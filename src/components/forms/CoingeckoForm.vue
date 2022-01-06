<script lang="ts" setup>

  const onSubmit = (values: string[]) => console.log(values, null, 2);

  const validateEmail = (value: string) => {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }

      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }

      return true;
    }
</script>


<template>
  <div id="app">
    <Form @submit="onSubmit">
      <Field name="email" type="email" :rules="validateEmail" />
      <ErrorMessage name="email" />

      <button>Sign up</button>
    </Form>
  </div>
</template>

<style>
span {
  display: block;
  margin: 10px 0;
}
</style>