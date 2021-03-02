<template>
  <div class="my-2 text-lg font-semibold">
    <label class="flex items-center ">
      <button
        class="transition-colors rounded-full cursor-pointer hover:bg-purple-400"
        :class="
          todo.is_completed
            ? 'bg-purple-800 text-white '
            : 'bg-blue-200 text-black '
        "
        @click="
          toggleCompleted({ id: todo.id, is_completed: !todo.is_completed })
        "
      >
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          :color="todo.is_completed ? '#eee' : '#2e2e2e'"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
        </svg>
      </button>
      <span class="mx-1">{{ todo.text }}</span>
      <button
        v-if="todo.is_completed"
        @click="deleteTodo({ id: todo.id })"
        class="px-2 py-1 ml-auto text-sm text-white transition-colors bg-red-600 rounded cursor-pointer hover:bg-red-400"
      >
        X
      </button>
    </label>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/composables/useUser";
import { deleteTodoMutation } from "@/graphql/mutations/deleteTodo";
import { updateTodoCompletionMutation } from "@/graphql/mutations/updateTodoCompletion";
import { useMutation } from "@vue/apollo-composable";
import { defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
  props: {
    todo: { type: Object as PropType<Todo>, required: true }
  },
  setup(props) {
    const { mutate: toggleCompleted } = useMutation(
      updateTodoCompletionMutation
    );

    const { mutate: deleteTodo } = useMutation(deleteTodoMutation);

    return { ...toRefs(props), toggleCompleted, deleteTodo };
  }
});
</script>
