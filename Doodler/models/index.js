const mongoose = require('mongoose');
const Character = require('./character');
exports.Character = Character;
const CharacterModel = require('./character');

// mongoose.connect('mongodb://localhost:27017/doodler', {
// mongoose.connect('mongodb://localhost:27017/doodler', {
// 	useNewUrlParser: true,
// 	useFindAndModify: false,
// 	useCreateIndex: true,
// 	useUnifiedTopology: true,
// })
// 	.then(()=> console.log("MongoDB connected successfully"))
// 	.catch((err)=> console.log(`MongoDB error: ${err}`))
mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );

module.exports = {
	Character : CharacterModel
	
};


