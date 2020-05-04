const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const CharacterSchema = new Schema ({
	name: String,
	head: String,
	torso: String,
	legs: String,
	feet: String,
	background: String,
	accessories: String

});

const Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;