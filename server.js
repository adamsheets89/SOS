//dependencies
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = module.exports = express(); 

var connection = require("./config/connection")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "app/views")));
app.use(bodyParser.json());

//handlesbars as default template
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//route controllers
var htmlController = require("./app/routing/htmlRoutes.js");
var postController = require("./app/routing/postRoutes.js");

htmlController.index(app);
htmlController.allies(app);
htmlController.sendHelp(app);
postController.updateDB(app);
postController.displayDB(app);

var port = process.env.PORT || 4040;

app.listen(port, function () {
    console.log("We are connected at " + port)
});