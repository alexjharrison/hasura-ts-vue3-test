import gql from "graphql-tag";

export const getTodosQuery = gql`
  query AllTodos {
    todo {
      created_at
      id
      is_completed
      text
      updated_at
      user {
        email
      }
    }
  }
`;
