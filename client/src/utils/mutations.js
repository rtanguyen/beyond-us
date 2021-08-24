import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postsId: ID!, $commentBody: String!) {
    addReaction(postsId: $postsId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        username
        createdAt
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($bodyText: String!) {
    addPost(bodyText: $bodyText) {
      _id
      subtitle
      bodyText
      createdAt
      orgLink
      commentCount
      comments {
        _id
      }
    }
  }
`;
