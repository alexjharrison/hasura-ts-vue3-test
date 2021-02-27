1<template>
  <header class="p-4 bg-blue-400 ">
    <nav class="flex items-center mx-auto max-w-7xl">
      <p class="text-3xl">My Cool Todo App</p>
      <p v-if="user?.id" class="ml-auto text-xl capitalize">
        Hello {{ user.name }}
        <button
          class="px-1 ml-3 text-base font-semibold transition-colors bg-blue-300 border border-blue-600 rounded-xl hover:bg-blue-700"
          @click="
            logout();
            $router.push('/login');
          "
        >
          Logout
        </button>
      </p>
    </nav>
  </header>
</template>

<script lang="ts">
import { useUser } from "@/composables/useUser";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { user, logout } = useUser();
    return { user, logout };
  }
});
</script>
