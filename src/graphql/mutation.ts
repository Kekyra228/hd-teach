import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;

export const MY_PROFILE_QUERY = gql`
  query MyProfile {
    myProfile {
      name
      avatar
    }
  }
`;
