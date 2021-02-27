import gql from "graphql-tag";

export const verifyPasswordQuery = gql(`query PasswordVerification($email:String!, $password:String!) {
    user(where: {password: {_eq: $password}, email: {_eq: $email}}) {
          id
    }
  }`);
