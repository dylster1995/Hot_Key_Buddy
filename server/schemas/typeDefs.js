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
    profile: String
    user_id: ID!
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

<<<<<<< HEAD
=======

>>>>>>> 6991110bc5a2355e2d19e5e235acb787214304be
  type Query {
    readUser(_id: ID!): User
    readUsers: [User]
    readGame(_id: ID!): Game
    readGames(user_id: ID!): [Game]
  }

  type Mutation {
    createUser(email: String!, password: String!): Auth
    updateUser(email: String!, password: String!, _id: ID!): User
    deleteUser(_id: ID!): User
    createGame(title: String!, profile: String!, user_id: ID!): Game
    updateGame(title: String!, profile: String!, _id: ID!): Game
    deleteGame(_id: ID!): Game
    createBind(keyBind: String!, binding:String!): Bind
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
