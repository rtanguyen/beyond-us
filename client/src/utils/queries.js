import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      title
      subtitle
      bodyText
      
      image
      orgLink
      comments {
        _id
        commentBody
        username
        
      }
    }
  }
`;

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      title
      subtitle
      bodyText
      image
      orgLink
      comments {
        _id
        commentBody
        username
        
      }
    }
  }
`;
