const express = require('express');
const app = express ();
const db = require('./models');
const bodyParser = require('body-parser');
const PORT = process.envPORT || 4000;

//ROUTES
const routes = require("./routes");

//MIDDLEWARE
app.use(express.static('public'));

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//HTML ROUTES
app.use("/", routes.views);

//API ROUTES
app.use("/api/v1", routes.api);

//SERVER START
app.listen(process.env.PORT || 3000)
