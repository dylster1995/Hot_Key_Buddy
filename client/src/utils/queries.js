import { gql } from '@apollo/client';

export const QUERY_READ_USER = gql`
query Query {
  readUser {
    _id
    email
    games {
      _id
      profile
      title
    }
    keyBinds {
      _id
      binding
      keyBind
    }
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


