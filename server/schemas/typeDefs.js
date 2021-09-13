//import the GQL
const { gql } = require('apollo-server-express');
//type def
const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
		organization: String
	}
	type Posts {
		_id: ID
		title: String
		subtitle: String
		bodyText: String
		image: String
		location: String
		organization: String
		orgLink: String
		postType: String
		endDate: String
		createdAt: String
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
		image: String
		location: String
		organization: String
		orgLink: String
		postType: String
		endDate: String
		createdAt: String
		username: String
	}
	type Query {
		me: User
		users: [User]
		user(username: String!): User
		posts(postType: String, location: String, endDate: String): [Posts]
		post(_id: ID!): Posts
	}
	type Mutation {
		login(username: String!, password: String!): Auth
		addUser(username: String, email: String!, password: String!): Auth
		addPost(input: PostDetails): Posts
		addComment(postsId: ID!, commentBody: String): Posts
		rsvp(postsId: ID!): Posts
	}
	type Auth {
		token: ID!
		user: User
	}
`;
//export
module.exports = typeDefs;
