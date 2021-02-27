<template>
  <header class="p-4 text-3xl bg-blue-400">My Cool Todo App</header>
  <router-view />
  <footer
    class="p-4 mt-auto text-xl text-center bg-gray-200 border-t border-gray-300"
  >
    &copy; {{ new Date().getFullYear() }}
  </footer>
</template>

<script setup lang="ts">
import { DefaultApolloClient } from "@vue/apollo-composable";
import { provide } from "vue";
import { apolloClient } from "./config/apolloClient";

provide(DefaultApolloClient, apolloClient);
</script>
