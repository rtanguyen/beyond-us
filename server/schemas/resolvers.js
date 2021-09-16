const { User, Posts } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({
					_id: context.user._id,
				})
					.select('-__v -password')
					.populate('posts')
					.populate('comments');

				return userData;
			}
		},
		// posts: async (parent, { username }) => {
		// 	const params = username ? { username } : {};
		// 	return Posts.find(params).sort({ createdAt: -1 });
		// 	// return Posts.find();
		// },
		posts: async (parent, args) => {
			const params = args ? { ...args } : {};
			return Posts.find(params).sort({ createdAt: -1 });
			// return postData.sort({ createdAt: -1 });
			// return Posts.find();
		},
		//single post
		post: async (parent, { _id }) => {
			return Posts.findOne({ _id });
		},
		//get all users
		users: async () => {
			return (
				User.find()
					.select('-__v -password')
					// .populate("posts")
					.populate('comments')
			);
		},
		//get by username
		user: async (parent, { username }) => {
			return User.findOne({ username })
				.select('-__v -password')
				.populate('posts')
				.populate('comments');
		},
	},
	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
		login: async (parent, { username, password }) => {
			const user = await User.findOne({ username });

			if (!user) {
				throw new AuthenticationError('wrong username');
			}
			const correctPass = await user.isCorrectPassword(password);
			if (!correctPass) {
				throw new AuthenticationError('wrong password');
			}
			const token = signToken(user);
			console.log(token, user);
			return { token, user };
		},
		addPost: async (parent, { input }, context) => {
			if (context.user) {
				console.log(input);
				const post = await Posts.create(input);

				// await User.findByIdAndUpdate(
				//   { _id: context.user._id },
				//   { $push: { Posts: input } },
				//   { new: true }
				// );
				return post;
			}
			throw new AuthenticationError('You must be logged in to add a post.');
		},
		addComment: async (parent, { postsId, commentBody }, context) => {
			if (context.user) {
				console.log(commentBody);
				const updatedPost = await Posts.findOneAndUpdate(
					{ _id: postsId },
					{
						$push: {
							comments: { commentBody, username: context.user.username },
						},
					},
					{ new: true, runValidators: true }
				);
				return updatedPost;
			}
			throw new AuthenticationError('You must be logged in to add a comment');
		},
		rsvp: async (parent, { postsId }, context) => {
			if (context.user) {
				const updatedPost = await Posts.findOneAndUpdate(
					{ _id: postsId },
					{
						$addToSet: {
							attendance: { _id: context.user._id },
						},
					},
					{ new: true, runValidators: true }
				);
				console.log(updatedPost);
				return updatedPost;
			}
			throw new AuthenticationError('You must be logged in to RSVP');
		},
	},
};

module.exports = resolvers;
