<template>
  <div v-if="loading"><p>loading...</p></div>
  <div v-else>{{ result }}</div>
</template>

<script lang="ts">
import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { result, loading } = useQuery(gql`
      query MyQuery {
        todo {
          created_at
          id
          is_completed
          text
          updated_at
          user {
            name
            id
            email
            created_at
          }
        }
      }
    `);

    return { result, loading };
  }
});
</script>
