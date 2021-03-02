import gql from "graphql-tag";

export interface AddUserPayload {
  name: string;
  email: string;
  password: string;
}

export const addUserMutation = gql`
  mutation AddUser($email: String!, $name: String!, $password: String!) {
    insert_user_one(
      object: { email: $email, name: $name, password: $password }
    ) {
      id
    }
  }
`;
