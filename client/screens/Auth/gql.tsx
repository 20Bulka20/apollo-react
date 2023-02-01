import { gql } from '@apollo/client';

export const GET_USERS = gql`
query GetUsers {
    getUsers {
  userName
  id
  email
  userLastName    
    }
  }
`;

export const SIGNUP_USER = gql`
mutation Mutation($userName: String!, $userLastName: String!, $email: String!) {
    signUp(userName: $userName, userLastName: $userLastName, email: $email) {
      userName
      userLastName
      id
      email
    } 
   }
`;

export const SIGNIN_USER = gql`
  mutation SignIn($userName: String!, $email: String!) {
    signIn(userName: $userName, email: $email) {
      token
      userID
    }
  }
`;