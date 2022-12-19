const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    games: [Game]
    keyBinds: [Bind]
  }

  type Game {
    _id: ID!
    title: String!
    profile: String!
  }

  type Bind {
    _id: ID!
    keyBind: String!
    binding: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    readUser: User
    readUsers: [User]
    readGame(_id: ID!): Game
  }

  type Mutation {
    createUser(email: String!, password: String!): Auth
    updateUser(email: String!, password: String!): User
    deleteUser(_id: ID!): User
    createGame(title: String!, profile: String!): User
    updateGame(title: String!, profile: String!): Game
    deleteGame(_id: ID!): Game
    createBind(keyBind: String!, binding:String!): Bind
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
