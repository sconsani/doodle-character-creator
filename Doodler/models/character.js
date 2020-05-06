const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const CharacterSchema = new Schema ({
	name: {
		type: String,
	},
	head: {
		type: String,
		imagelink: String
	},
	torso: {
		type: String,
		imagelink: String
	},
	legs: {
		type: String,
		imagelink: String
	},
	feet: {
		type: String,
		imagelink: String
	},
	background: {
		type: String,
		imagelink: String
	},
	accessories: {
		type: String,
		imagelink: String
	},

});

const Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;