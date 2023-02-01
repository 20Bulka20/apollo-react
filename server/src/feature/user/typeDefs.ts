import {gql} from 'apollo-server'
const typeDefs = gql`
type Users {
    id: ID!
    userName: String!
    userLastName: String!
    email: String!
  }

  type Query {
    getUsers: [Users!]!
    getUser(userName: String!, email: String!): [Users!]!
  }

  type Mutation {
    signUp( userName: String!, userLastName: String!, email: String!): Token!
    signIn(userName: String!, email: String!): Token!
    updateUser(id: String, userName: String, userLastName: String, email: String ): [Users!]
    deleteUserById(id: String!): [Users!]
  }

  type Token {
    userID: ID!
    token: String!      
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

export default typeDefs;