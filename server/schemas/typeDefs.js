const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Game {
    _id: ID!
    title: String!
    profile: String
    user_id: ID!
  }

  type Query {
    readUser(_id: ID!): User
    readUsers: [User]
    readGame(_id: ID!): Game
    readGames(user_id: ID!): [Game]
    login(email: String!, password: String!): User!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    updateUser(username: String!, email: String!, password: String!, _id: ID!): User
    deleteUser(_id: ID!): User
    createGame(title: String!, profile: String!, user_id: ID!): Game
    updateGame(title: String!, profile: String!, _id: ID!): Game
    deleteGame(_id: ID!): Game
    deleteGames: Game
    deleteUsers: User
  }
`;

module.exports = typeDefs;

// input GamesInput {
//   title: String!
//   profile: String
// }