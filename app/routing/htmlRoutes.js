
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

var createAccount = function (app) {
    app.get("/new-user", function (req, res) {
        res.render("../views/new")
    })
};

var login = function (app) {
    app.get("/login", function (req, res) {
        res.render("../views/login")
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
    createAccount: createAccount,
    sendHelp: sendHelp
};