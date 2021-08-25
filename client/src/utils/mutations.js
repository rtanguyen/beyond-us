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
  mutation addComment($postsId: ID!, $commentBody: String) {
    addComment(postsId: $postsId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        username

      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($input: PostDetails) {
    addPost(input: $input) {
      _id
      title
      subtitle
      bodyText

      orgLink
      image
      username
      commentCount
      comments {
        _id
      }
    }
  }
`;
