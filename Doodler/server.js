const express = require('express');
const app = express ();
const db = require('./models');

//MIDDLEWARE
app.use(express.static('public'));

//ROUTES
app.get("/", (request, response)=> {
	response.send('Hello World');
});

//SERVER START
app.listen(3000, () => {
	console.log("HTTP server listening at localhost: 3000");
});
