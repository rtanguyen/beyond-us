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
        createdAt
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
      image
      location
      organization
      orgLink
      postType
      endDate
      createdAt
      username
      commentCount
      comments {
        _id
      }
    }
  }
`;

export const RSVP_ATTEND = gql`
  mutation rsvp($postsId: ID!) {
    rsvp(postsId: $postsId) {
      _id
      attendanceCount
    }
  }
`;
