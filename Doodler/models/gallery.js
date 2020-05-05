const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const GallerySchema = new Schema ({
	name: String,
	characters: [Character.schema],

});

const Gallery = mongoose.model('Gallery', GallerySchema);

module.exports = Gallery;