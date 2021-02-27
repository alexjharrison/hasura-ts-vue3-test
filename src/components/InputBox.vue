<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col max-w-2xl px-12 py-5 mx-auto my-8 text-center border border-black rounded bg-blue-50"
  >
    <slot name="header" />
    <label v-for="field in fields" :key="field.name">
      <span class="block mt-2 mb-1 text-left capitalize">{{ field.name }}</span>
      <input
        class="w-full"
        :name="field.name"
        :type="field.type"
        v-model="formValues[field.name]"
        required
      />
    </label>
    <button class="btn">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";

export interface Field {
  name: string;
  type: "text" | "email" | "password";
}

export default defineComponent({
  props: {
    fields: { type: Array as PropType<Field[]>, required: true }
  },
  setup(props, { emit }) {
    const fieldNames = props.fields.map(field => field.name);
    const formValues = reactive(
      fieldNames.reduce((acc, name) => ({ ...acc, [name]: "" }), {})
    );

    const handleSubmit = () => {
      emit("form-submit", formValues);
    };

    return { formValues, handleSubmit };
  }
});
</script>

<style scoped></style>
