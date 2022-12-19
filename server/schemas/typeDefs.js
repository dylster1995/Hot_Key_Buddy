const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input GamesInput {
    title: String!
    profile: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    games: [Game]
    keyBinds: [Bind]
  }

  type Game {
    _id: ID!
    title: String!
    profile: String
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

  input  {


  }

  type Query {
    readUser(_id: ID!): User
    readUsers: [User]
    readGames: [Game]
    readGame: Game
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!, games: [GamesInput]): User
    updateUser(username: String!, email: String!, password: String!, games: [GamesInput]): User
    deleteUser(_id: ID!): User
    createGame(title: String!, profile: String): Game
    updateGame(title: String!, profile: String): Game
    deleteGame(_id: ID!): Game
    createBind(keyBind: String!, binding:String!):Bind
  }
`;

module.exports = typeDefs;
