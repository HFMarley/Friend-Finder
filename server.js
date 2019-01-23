var path = require("path");
var express = require("express");

//app equals express server. 
var app = express();
var PORT = process.env.PORT || 3000;

//expresslibrary allows us to use middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setting up routes from external js file. Or, require the exported functions from
//apiRoutes and htmlRoutes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

