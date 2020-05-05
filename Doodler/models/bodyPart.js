const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const BodypartSchema = new Schema ({
	name : String,
	options : [String]
})

const Bodypart = mongoose.model("Bodypart", BodypartSchema);

module.exports = Bodypart;