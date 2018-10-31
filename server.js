// Dependencies/Requires
// =================================================================
var express = require('express');

// Set up Express App
// =================================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Set up Express middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// =================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start server to begin listening
// =================================================================
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});