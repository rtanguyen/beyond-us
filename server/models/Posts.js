const { Schema, model } = require('mongoose');

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        subtitle: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 1,
        },
        bodyText: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 1,
        },
        createdAt: {
            type: Date,
        },
        image: {
            type: String,
        },
        orgLink: {
            type: String
        },
        comments: [commentSchema]
    },
    {
        toJSON: {
            virtuals: True
        }
    }
);

postSchema.virtual('commentCount').get(function(){
    return this.comments.length;
})

const Posts = model('Posts', postSchema);
module.exports = Posts;