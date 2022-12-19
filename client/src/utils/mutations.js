import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation makeUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const CREATE_GAME = gql`
  mutation makeGame($title: String!, $profile: String!, $user_id: ID!){
    createGame(title: $title, profile: $profile, user_id: $user_id){
      title
      profile
      user_id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation changeUser($email: String!, $password: String!, $id: ID!){
    updateUser(email: $email, password: $password, _id: $id) {
      email
    }
  }
`;

export const UPDATE_GAME = gql`
mutation changeGame($title: String!, $profile: String!, $_id: ID!){
  updateGame(title: $title, profile: $profile, _id: $_id) {
    title
    profile
  }
}
`;

export const DELETE_USER = gql`
mutation removeUser($id: ID!){
  deleteUser(_id: $id) {
    _id
    email
  }
}
`;

export const DELETE_GAME = gql`
mutation removeGame($id: ID!){
  deleteGame(_id: $id) {
    _id
    title
    profile
  }
}
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!){
  login(email: $email, password: $password){
    token
    user {
      _id
      email
    }
  }
}
`;
