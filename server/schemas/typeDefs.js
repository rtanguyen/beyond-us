//import the GQL
const { gql } = require('apollo-server-express');
//type def
const typeDefs = gql`
    type User {
        _id: ID,
        username: String,
        email: String
        posts: [Posts]
    }
    type Post {
        _id: ID,
        subtitle: String,
        bodyText: String,
        createdAt: String,
        orgLink: String,
        comments: [Comments]
    }
    type Comments {
        _id: ID,
        commentBody: String,
        username: String,
        createdAt: String,
    }
    type Query {
        me: User
        users: (username: String!): User
        posts(username: String): [Posts]
        posh(_id: ID!): Post
    }
    type Mutations {
        login(username: String!, password: String!)
        addUser(username: String, email: String!, password: String!)
        addPost(bodyText: String!): Posts
        addComment(postsId: ID!, commentBody: String!): Post

    }
    type Auth {
        toke: ID!
        user: User
    }
    `
//export
module.exports = typeDefs;