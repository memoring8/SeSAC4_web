const User = require('../model/user');
exports.index = (req,res) => {
    res.render("index");
}

exports.register = (req, res) => {
    res.render('register');
}

exports.post_register = (req, res) => {
    User.post_user(req.body);
    res.send(req.body);
}

exports.login = (req, res) => {
    res.render('login');
}

exports.post_login = async (req, res) => {
    var data = await User.get_user();


    var infos = data.split('\n');


    
    for (let i = 0; i < infos.length; i++ ) {
        // i = 0. info[i] = '1//1//1//1';
        var info = infos[i].split('//');

        if (info[0] == req.body.id && info[1] == req.body.pw) {
            res.send('성공');
            return false;
        }
    }
    // infos = ['1//1//1//1', '2//2//2//2'];




    var info = data.split('//');
    // {'aa', 'aa', 'aa', 'aa'} 배열로 나눠짐 ..?

    if( info[0] != req.body.id){
        res.send('아이디 다름');
    } else if (info[1] != req.body.pw) {
        res.send('비밀번호가 다름');
    } else {
        res.send('로그인 성공');
    }
    console.log(data);
}