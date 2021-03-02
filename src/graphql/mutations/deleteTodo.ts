import gql from "graphql-tag";

export const deleteTodoMutation = gql`
  mutation DeleteTodo($id: uuid!) {
    delete_todo_by_pk(id: $id) {
      id
    }
  }
`;
