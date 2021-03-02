<template>
  <section class="mt-10">
    <h2 class="mb-3">Add a new todo</h2>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodo" autofocus />
      <button class="p-2 ml-4 bg-green-400 border border-green-500 rounded">
        Save
      </button>
    </form>
  </section>
</template>

<script lang="ts">
import { useUser } from "@/composables/useUser";
import { addTodoMutation } from "@/graphql/mutations/addTodo";
import { useMutation } from "@vue/apollo-composable";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const { user } = useUser();

    const newTodo = ref<string>("");

    const { mutate } = useMutation(addTodoMutation);

    async function addTodo() {
      // eslint-disable-next-line @typescript-eslint/camelcase
      await mutate({ text: newTodo.value, user_id: user.value.id });
      newTodo.value = "";
    }
    return { newTodo, addTodo };
  }
});
</script>
