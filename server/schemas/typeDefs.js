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
    subtitle: String
    bodyText: String
    createdAt: String
    orgLink: String
    comments: [Comments]
  }
  type Comments {
    _id: ID
    commentBody: String
    username: String
    createdAt: String
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
    addPost(bodyText: String!): Posts
    addComment(postsId: ID!, commentBody: String!): Posts
  }
  type Auth {
    token: ID!
    user: User
  }
`;
//export
module.exports = typeDefs;
