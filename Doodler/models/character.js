const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const CharacterSchema = new Schema ({
	name: {
		type: String,
		imagelink: String
	},
	head: {
		type: String,
		image: String
	},
	torso: {
		type: String,
		image: String
	},
	legs: {
		type: String,
		image: String
	},
	feet: {
		type: String,
		image: String
	},
	background: {
		type: String,
		image: String
	},
	accessories: {
		type: String,
		image: String
	},

});

const Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;