//import the GQL
const { gql } = require("apollo-server-express");
//type def
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
  type Posts {
    _id: ID
    title: String
    subtitle: String
    bodyText: String
    createdAt: String
    image: String
    orgLink: String
    username: String
    commentCount: Int
    comments: [Comments]
  }
  type Comments {
    _id: ID
    commentBody: String
    username: String
    createdAt: String
  }
  input PostDetails {
    _id: ID
    title: String!
    subtitle: String
    bodyText: String!
    createdAt: String
    image: String
    orgLink: String
    username: String
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Posts]
    post(_id: ID!): Posts
  }
  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String, email: String!, password: String!): Auth
    addPost(input: PostDetails): Posts
    addComment(postsId: ID!, commentBody: String!): Posts
  }
  type Auth {
    token: ID!
    user: User
  }
`;
//export
module.exports = typeDefs;
