const mongoose = require('mongoose');
const Character = require('./character');
exports.Character = Character;
const CharacterModel = require('./character');

mongoose.connect('mongodb://localhost:27017/doodler', {
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

module.exports = {
	Character : CharacterModel
}


