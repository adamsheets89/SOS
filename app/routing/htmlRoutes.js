
var index = function (app) {
    app.get("/", function (req, res) {
        res.render("../views/index")
    })
};

var allies = function (app) {
    app.get("/allies", function (req, res) {
        res.render("../views/allies")
    })
};

//this one will need to display the call buttons for the user to select 
var sendHelp = function (app) {
    app.get("/call", function (req, res) {
        res.render("../views/call")
    })
};

module.exports = {
    index: index,
    allies: allies,
    sendHelp: sendHelp
};