import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      title
      subtitle
      bodyText
      createdAt
      image
      orgLink
      comments {
        _id
        commentBody
        username
        createdAt
      }
    }
  }
`;

export const QUERY_POST = gql`
  query post($id: ID!) {
    posts(_id: $id) {
      _id
      title
      subtitle
      bodyText
      createdAt
      image
      orgLink
      comments {
        _id
        commentBody
        username
        createdAt
      }
    }
  }
`;
