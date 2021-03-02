import gql from "graphql-tag";

export const updateTodoCompletionMutation = gql`
  mutation UpdateTodoCompletion($id: uuid!, $is_completed: Boolean) {
    update_todo_by_pk(
      pk_columns: { id: $id }
      _set: { is_completed: $is_completed }
    ) {
      is_completed
    }
  }
`;
