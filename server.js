//dependencies
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var express = require("express");

var app = module.exports = express(); 

var port = 4040;

//handlesbars as default template
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//route controllers
var htmlController = require("./app/routing/htmlRoutes.js");

htmlController.index(app);
htmlController.allies(app);
htmlController.sendHelp(app);

app.listen(port, function () {
    console.log("We are connected at " + port)
});