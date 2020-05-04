const db = require('./models');



const newCharacter = {
	name: "SammyDood",
	head: "redhead",
	torso: "black-shirt",
	legs: "green-pants",
	feet: "white-vans",
	background: "empty",
	accessories: "skateboard"

}

db.Character.create(newCharacter, (err, savedCharacter)=> {
	if (err) {
		return console.log(err);
	}
	console.log(`saved new character: ${savedCharacter}`);
});