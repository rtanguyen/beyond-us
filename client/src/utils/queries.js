import { gql } from "@apollo/client";

// query posts($username: String)
export const QUERY_POSTS = gql`
  {
    posts {
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
        commentBody
        username
      }
    }
  }
`;

export const QUERY_POSTS_BASIC = gql`
  query posts($postType: String, $location: String, $endDate: String) {
    posts(postType: $postType, location: $location, endDate: $endDate) {
      _id
      title
      subtitle
      image
      location
      postType
      endDate
      createdAt
      commentCount
      comments {
        _id
        commentBody
        username
      }
    }
  }
`;

export const QUERY_LOCATIONS = gql`
  {
    posts {
      location
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
      location
      organization
      orgLink
      postType
      endDate
      createdAt
      username
      attendanceCount
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
