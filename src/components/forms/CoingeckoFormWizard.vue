<script lang="ts" setup>
import * as zod from 'zod'
import { Form, Field, ErrorMessage } from "vee-validate"
import { ref, reactive, computed } from "vue"

const currentStep = ref(0);
// since vee-validate removes values from the values object once the fields are unmounted
// we would need to accumlate them manually
const formValues = reactive({});

const schemas = [
  zod.object({
    name: zod.string().required(),
    email: zod.string().required().email(),
  }),
  zod.object({
    password: zod.string().required().min(6),
    confirmPassword: zod
      .string()
      .required()
      .min(6)
      .oneOf([zod.ref("password")], "Passwords must match"),
  }),
  zod.object({
    address: zod.string().required(),
    postalCode: zod
      .string()
      .required()
      .matches(/^[0-9]+$/, "Must be numeric"),
  }),
  zod.object({
    terms: zod.bool().required().equals([true]),
  }),
];

const currentSchema = computed(() => {
  return schemas[currentStep.value];
});

function nextStep(values) {
  if (currentStep.value === 3) {
    console.log("Done: ", JSON.stringify(formValues, null, 2));
    return;
  }

  // accumlate the form values with the values from previous steps
  Object.assign(formValues, values);
  console.log("Current values: ");
  console.log(JSON.stringify(formValues, null, 2));
  currentStep.value++;
}

function prevStep() {
  if (currentStep.value <= 0) {
    return;
  }

  currentStep.value--;
}
</script>


<template>
  <Form @submit="nextStep" :validation-schema="currentSchema" v-slot="{ handleSubmit }">
    <template v-if="currentStep === 0">
      <label for="name">Name</label>
      <Field name="name" id="name" v-model="formValues.name" />
      <ErrorMessage name="name" />

      <label for="email">Email</label>
      <Field name="email" id="email" type="email" v-model="formValues.email" />
      <ErrorMessage name="email" />
    </template>

    <template v-if="currentStep === 1">
      <label for="password">Password</label>
      <Field name="password" type="password" id="password" v-model="formValues.password" />
      <ErrorMessage name="password" />

      <label for="confirmation">Confirm Password</label>
      <Field
        name="confirmPassword"
        type="password"
        id="confirmation"
        v-model="formValues.password"
      />
      <ErrorMessage name="confirmPassword" />
    </template>

    <template v-if="currentStep === 2">
      <label for="address">Address</label>
      <Field as="textarea" name="address" id="address" v-model="formValues.address" />
      <ErrorMessage name="address" />

      <label for="postalCode">Postal Code</label>
      <Field name="postalCode" id="postalCode" v-model="formValues.postalCode" />
      <ErrorMessage name="postalCode" />
    </template>

    <template v-if="currentStep === 3">
      <label for="terms">Agree to terms and conditions</label>
      <Field name="terms" type="checkbox" id="terms" :value="true" v-model="formValues.terms" />
      <ErrorMessage name="terms" />
    </template>

    <button v-if="currentStep !== 0" type="button" @click="prevStep">Previous</button>

    <button v-if="currentStep !== 3" type="submit">Next</button>

    <button v-if="currentStep === 3" type="submit">Finish</button>
  </Form>
</template>
