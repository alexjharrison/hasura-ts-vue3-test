import gql from "graphql-tag";

export const getUserTodosQuery = gql(`query GetUserTodos($id:uuid!) {
    user_by_pk(id: $id) {
      todos {
        created_at
        id
        is_completed
        text
        updated_at
      }
      created_at
      email
      id
      name
    }
  }
`);
