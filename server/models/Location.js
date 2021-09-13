const { Schema } = require('mongoose');

const locationSchema = new Schema({
	name: {
		type: String,
		trim: true,
	},
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
