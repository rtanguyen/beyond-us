const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
// const locationSchema = require('./Location');
const userSchema = require('./User');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
	{
		title: {
			type: String,
			// required: true,
			// unique: true,
			trim: true,
		},
		subtitle: {
			type: String,
			// required: true,
			// unique: true,
			trim: true,
			minlength: 1,
		},
		bodyText: {
			type: String,
			// required: true,
			// unique: true,
			trim: true,
			minlength: 1,
		},
		image: {
			type: String,
		},
		location: {
			type: String,
		},
		organization: {
			type: String,
		},
		orgLink: {
			type: String,
		},
		postType: {
			type: String,
		},
		endDate: {
			type: Date,
			get: (date) => dateFormat(date),
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (timestamp) => dateFormat(timestamp),
		},
		username: {
			type: String,
			// required: true,
		},

		attendance: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],

		comments: [commentSchema],
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
	}
);

postSchema.virtual('commentCount').get(function () {
	return this.comments.length;
});

postSchema.virtual('attendanceCount').get(function () {
	return this.attendance.length;
});

const Posts = model('Posts', postSchema);
module.exports = Posts;
