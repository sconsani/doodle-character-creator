const express = require ("express");
const router = express.Router();

//homepage view
router.get("/", (req, res)=> {
	res.sendFile("views/index.html", {
		root: __dirname + "/../",
	});
});

//all characters- gallery view
router.get("/gallery", (req, res)=> {
	res.sendFile("views/gallery.html", {
		root: __dirname + "/../",
	});
});

//create- build a character view
router.get("/create-a-doodle", (req, res)=> {
	res.sendFile("views/builder.html", {
		root: __dirname + "/../",
	});
});

module.exports = router;