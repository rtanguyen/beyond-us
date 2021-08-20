const { User, Posts } = require('../models');
const { AuthenticateError, AuthenticationError } = require('apollo-server-errors');
 


const resolvers = {
    Query: {
        me: async(parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ 
                    _id: context.user._id
                })
                .select('-__v -password')
                .populate('posts')
                .populate('comments');

            return userData;
            }
        },
        posts: async(parent, { username }) => {
            const params = username ? { username } : {};
            return Posts.find(params).sort({ createdAt: -1 })
        },
        //single post
        post: async (parent, { _id }) => {
            return Posts.findOne({ _id });
        },
        //get all users
        users: async() => {
            return User.find()
            .select('-__v -password')
            .populate('posts')
            .populate('comments');
        },
        //get by username
        user: async(parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('posts')
            .populate('comments');

        }
    },
    Mutation: {
        addUser: async(parent, args) => {
            const user = await User.create(args);
            return { user };
        },
        login: async(parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticateError('wrong credentials')
            }
            const correctPass = await user.isCorrectPassword(password);
            if (!correctPass) {
                throw new AuthenticateError('wrong credentials')
            }
            //auth via webtoken
        },
        addPost: async(parent, args, context) => {
            if (context.user) {
                const post = await Posts.create({ ...args, username: context.username});

                await User.findByIdAndUpdate(
                    { _id: contex.user._id },
                    { $push: { posts: posts._id } },
                    { new: true }
                );
                throw new AutenthicateError('You must be logged in to add a post.')
            }
        },
        addComment: async (parent, {postsId, commentBody} , context) => {
            if (context.user) {
                const updatedPost = await Thought.findOneAndUpdate(
                    { _id: postsId },
                    { $push : { comments: { commentBody, username: context.user.username } } },
                    { new: true, runValidators: true}
                );
                return updatedPost;
            }
            throw new AuthenticateError('You must be logged in to add a comment')
        }
    }
}

module.exports = resolvers;