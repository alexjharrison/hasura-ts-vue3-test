<template>
  <div>
    <h1>View Todos</h1>
    <router-link :to="{ name: 'ViewTodo', params: { id: 25 } }"
      >Go to todo 25</router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
