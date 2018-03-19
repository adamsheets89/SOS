// var bcrypt = require("bcrypt");
// var express = require("express");
// var router = express.Router();
// var mysql = require("mysql");
// var connection = require("../../config/connection.js");
// var app = module.exports = express();
// var cookieParser = require("cookie-parser");
// var session = require("express-session");


<<<<<<< HEAD
router.get('/new-user', function(req,res) {
    res.render('');
  });
  
  router.get('/login', function(req,res) {
    res.render('users/sign_in');
  });
  
  router.get('/sign-out', function(req,res) {
    req.session.destroy(function(err) {
       res.redirect('/')
    })
  });

  //if user trys to sign in with the wrong password or email tell them that on the page
  router.post('/login', function(req, res) {
    
    var query = "SELECT * FROM users WHERE email = ?";
  
    connection.query(query, [ req.body.email ], function(err, response) {
        if (response.length == 0){
          res.redirect('')
        }
  
          bcrypt.compare(req.body.password, response[0].password_hash, function(err, result) {
              if (result == true){
  
                req.session.logged_in = true;
                req.session.user_id = response[0].id;
                req.session.user_email = response[0].email;
                req.session.phone = response[0].phone;
                req.session.username = response[0].username;
  
                res.redirect('/');
              }else{
                res.redirect('')
              }
          });
    });
  });
  
  router.post('/new-user', function(req,res) {
    var query = "SELECT * FROM users WHERE email = ?"
  
    connection.query(query, [ req.body.email ], function(err, response) {
      console.log(response)
      if (response.length > 0) {
        res.send('we already have an email or username for this account')
      }else{
  
        bcrypt.genSalt(10, function(err, salt) {
            //res.send(salt); //$2a$10$iFzdRYHKrNSOzwS/SDI/W.
            bcrypt.hash(req.body.password, salt, function(err, hash) {  
              //res.send(hash)          
              var query = "INSERT INTO users (username, email, password_hash, phoney) VALUES (?, ?, ?, ?)"
  
              connection.query(query, [ req.body.username, req.body.email, hash, req.body.phone ], function(err, response) {
=======

// // Place this in function to redirect to /login
//     var query = "SELECT * FROM users WHERE email = ?";
  
//     connection.query(query, [ req.body.email ], function(err, response) {
//         if (response.length == 0){
//           res.redirect('')
//         }
  
//           bcrypt.compare(req.body.password, response[0].password_hash, function(err, result) {
//               if (result == true){
  
//                 req.session.logged_in = true;
//                 req.session.user_id = response[0].id;
//                 req.session.user_email = response[0].email;
//                 req.session.phone = response[0].phone;
//                 req.session.username = response[0].username;
  
//                 res.redirect('/');
//               }else{
//                 res.redirect('')
//               }
//           });
//     });

// // direct this to new user
//     var query = "SELECT * FROM users WHERE email = ?"
  
//     connection.query(query, [ req.body.email ], function(err, response) {
//       console.log(response)
//       if (response.length > 0) {
//         res.send('we already have an email or username for this account')
//       }else{
>>>>>>> 9b580105f4d523f885bc0684587e90a0ca970b69
  
//         bcrypt.genSalt(10, function(err, salt) {
//             res.send(salt); 
//             bcrypt.hash(req.body.password, salt, function(err, hash) {  
//               res.send(hash)          
//               var query = "INSERT INTO users (user_id, email_add, user_password, phone_number) VALUES (?, ?, ?, ?)"
  
//               connection.query(query, [ req.body.user_id, req.body.email_add, req.body.user_password, req.body.phone_number ], function(err, response) {
  
<<<<<<< HEAD
                var query = "SELECT * FROM users WHERE id = ?"
                connection.query(query, [ req.session.user_id ], function(err, response) {
                  req.session.username = response[0].username;
                  req.session.user_email = response[0].email;
                  req.session.phone = response[0].phone;
=======
//                 req.session.logged_in = true;
>>>>>>> 9b580105f4d523f885bc0684587e90a0ca970b69
  
//                 req.session.user_id = response.insertId; //only way to get id of an insert for the mysql npm package
  
//                 var query = "SELECT * FROM users WHERE id = ?"
//                 connection.query(query, [ req.session.user_id ], function(err, response) {
//                   req.session.user_id = response[0].username;
//                   req.session.email_add = response[0].email;
//                   req.session.phone_number = response[0].phone;
//                   req.session.user_password= response[0].password
  
//                   res.redirect('')
//                 });
//               });
//             });
//         });
  
//       }
//     });
  
<<<<<<< HEAD
  module.exports = router;  
=======
>>>>>>> 9b580105f4d523f885bc0684587e90a0ca970b69
