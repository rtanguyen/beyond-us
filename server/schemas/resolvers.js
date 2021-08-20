const { User, Posts } = require('../models');

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
    }
}

module.exports = resolvers;