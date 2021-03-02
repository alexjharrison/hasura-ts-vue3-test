import { apolloClient } from "@/config/apolloClient";
import { getUserTodosQuery } from "@/graphql/queries/getUserTodos";
import {
  provideApolloClient,
  useQuery,
  useResult
} from "@vue/apollo-composable";

import { Ref, ref } from "vue";

interface Defaults {
  id: string;
  created_at: string;
  updated_at: string;
}

export interface Todo extends Defaults {
  text: string;
  is_completed: boolean;
}

export interface User extends Defaults {
  email: string;
  name: string;
  todos: Todo[];
}

const userId = ref<string>(localStorage.getItem("user_id") || "");

export function useUser() {
  provideApolloClient(apolloClient);

  const { result, loading, error } = useQuery(
    getUserTodosQuery,
    {
      id: userId
    },
    { pollInterval: 1000 }
  );
  const user = useResult(result, null, data => data.user_by_pk);

  function setUser(id: string) {
    localStorage.setItem("user_id", id);
    userId.value = id;
  }

  function logout() {
    localStorage.removeItem("user_id");
    userId.value = "";
  }

  return { user: user as Ref<User>, setUser, loading, error, logout };
}
