const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type {
    _id: ID!
    username: String!
    email: String!
  }

  type {

  }

  type Query {
    me: User
  }

  type Mutation {

  }
`;

module.exports = typeDefs;
