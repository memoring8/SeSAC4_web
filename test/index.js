const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const path = require("path");
// const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.use(express.static(path.join(__dirname, 'public')));

// app.use(session({
//     secret: 'secret key'
// }))


var express  = require('express');
var router = express.Router();
var Comment = require('../models/Comment');
var Post = require('../models/Post');
var util = require('../util');

router.post('/', util.isLoggedin, checkPostId, function(req, res){ // 1
    var post = res.locals.post; // 1-1
  
    req.body.author = req.user._id; // 2
    req.body.post = post._id;       // 2
  
    Comment.create(req.body, function(err, comment){
      if(err){
        req.flash('commentForm', { _id: null, form:req.body });                 // 3
        req.flash('commentError', { _id: null, errors:util.parseError(err) });  // 3
      }
      return res.redirect('/posts/'+post._id+res.locals.getPostQueryString()); //4
    });
  });
  
  module.exports = router;

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});