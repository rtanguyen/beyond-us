const { Schema, model } = require("mongoose");
const commentSchema = require("./Comment");
const dateFormat = require("../utils/dateFormat");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
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
    image: {
      type: String,
    },
    orgLink: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },

    comments: [commentSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

postSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

const Posts = model("Posts", postSchema);
module.exports = Posts;
