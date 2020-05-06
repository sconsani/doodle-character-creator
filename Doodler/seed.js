const mongoose = require("mongoose");
const db = require("./models");
const DB_URI = "mongodb://localhost:27017/doodler";

mongoose.connect(DB_URI, {
	useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})

	.then(()=> console.log("MongoDB connected successfully"))
	.catch((err)=> console.log(`MongoDB error: ${err}`))

// let heads = ["https://i.imgur.com/AI4jstJ.png", "", "", ""]
// let torso = ["", "", "", ""]
// let legs = ["", "", "", ""]
// let feet = ["", "", "", ""]
// let background = ["", "", "", ""]
// let accessories = ["", "", "", ""]

const newCharacter = [
	name: {
		type: Name,
		image: Sammy
	},
	head: {
		type: Head,
		image: ["https://i.imgur.com/AI4jstJ.png"]
	},
	torso: {
		type: Torso,
		image: ["#" bodypart.name]
	},
	legs: {
		type: Legs,
		image: ["#"]
	},
	feet: {
		type: Feet,
		image: ["#"]
	},
	background: {
		type: Background,
		image: ["#"]
	},
	accessories: {
		type: Accessories,
		image: ["#"]
	},

];



db.Character.create(newCharacter, (err, savedCharacter)=> {
	if (err) {
		return console.log(err);
	}
	console.log(`saved new character: ${savedCharacter}`);
});

// db.Character.deleteMany({}, (err, result) => {
// 	if (err) {
// 		console.log(err);
// 		process.exit();
// 	}
// 	console.log(`Successfully deleted ${result.deletedCount} donut stores`);
// 	process.exit();
// });










