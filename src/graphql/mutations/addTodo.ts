import gql from "graphql-tag";

export const addTodoMutation = gql`
  mutation AddTodo($text: String!, $user_id: uuid!) {
    insert_todo_one(
      object: { is_completed: false, text: $text, user_id: $user_id }
    ) {
      id
    }
  }
`;
