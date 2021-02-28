<template>
  <app-header />
  <main class="w-full p-4 mx-auto max-w-7xl">
    <router-view />
  </main>
  <footer
    class="p-4 mt-auto text-xl text-center bg-gray-200 border-t border-gray-300"
  >
    &copy; {{ new Date().getFullYear() }}
  </footer>
</template>

<script lang="ts">
import { DefaultApolloClient } from "@vue/apollo-composable";
import { defineComponent, provide } from "vue";
import { apolloClient } from "./config/apolloClient";
import AppHeader from "@/components/AppHeader.vue";
import { useUser } from "./composables/useUser";

export default defineComponent({
  components: { AppHeader },
  setup() {
    provide(DefaultApolloClient, apolloClient);
    useUser();
  }
});
</script>
