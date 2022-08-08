const User = require("../model/user");

exports.sign = (req, res) => {
    res.render('sign');
};


exports.get_signup = (req, res) => {
    res.render('signup');
};

exports.signup = (req, res) => {
    Visitor.insert( req.body.name, req.body.id, req.body.password, function( result ){
        res.send('회원가입성공')
    } );
};

exports.get_signin = (req, res) => {
    res.render('signin');
};

exports.signin = (req, res) => {
    Visitor.insert( req.body.id, req.body.password, function( result ){
        res.send('로그인성공')
    } );
};

