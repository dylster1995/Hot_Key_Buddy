import { gql } from '@apollo/client';

export const QUERY_READ_USER = gql`
query getUser($id: ID!){
  readUser(_id: $id) {
    username
    email
  }
}
`;

export const QUERY_READ_GAME = gql`
query getGame($_id: ID!){
  readGame(_id: $_id) {
    title
    profile
  }
}
`;

export const QUERY_READ_GAMES = gql`
query getGames($user_id: ID!){
  readGames(user_id: $user_id) {
    title
    profile
  }
}
`;

export const QUERY_LOGIN = gql`
query getUser($id: ID!){
  readUser(_id: $id) {
    _id
    username
    email
  }
}
`;
