<template>
  <div>
    <h1>View Your Todos</h1>
    <add-todo-form />

    <section class="max-w-sm p-4 my-10 border border-blue-900 rounded">
      <h2>Incomplete Todos</h2>
      <view-todo-item
        v-for="todo in incompleteTodos"
        :key="todo.id"
        :todo="todo"
      />
    </section>

    <section class="max-w-sm p-4 border border-pink-800 rounded">
      <h2>Completed Todos</h2>
      <view-todo-item
        v-for="todo in completedTodos"
        :key="todo.id"
        :todo="todo"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import ViewTodoItem from "@/components/ViewTodoItem.vue";
import AddTodoForm from "@/components/AddTodoForm.vue";
import { useUser } from "@/composables/useUser";

export default defineComponent({
  components: { ViewTodoItem, AddTodoForm },
  setup() {
    const { user } = useUser();

    const completedTodos = computed(() =>
      user.value?.todos.filter(todo => todo.is_completed)
    );
    const incompleteTodos = computed(() =>
      user.value?.todos.filter(todo => !todo.is_completed)
    );

    return { completedTodos, incompleteTodos };
  }
});
</script>
