// const Visitor = require("../model/Visitor");
const models = require("../model");
// models => model/index.js 에서의 db

exports.get_visitors = (req,res) => {
// 여기는 sequelize 문법 
    // model/Visitor.js에서의 model이다.
    models.Visitor.findAll() //sequelize 문법임. select * from visitor; 의 형태로 바꾸어 (실행해) 줌.
    .then((result) => {
        console.log("index : ", result);
        console.log("index");
        res.render("index", {data: result});
        
    });
// -- 여기는 mysql 문법
    // Visitor.get_visitors(function( result ){
    //     console.log( "result : ", result );
    //     console.log( "index" );
    //     res.render("index", { data: result });
    // });
}

exports.post_comment = (req,res) => {
    
    let object = {
        name: req.body.name,
        comment: req.body.comment
    };
    // create() -> insert into visitor
    // create({name:'홍', comment: '길동'})
    // -> insert into visitor(name, comment) values('홍', '길동');
    models.Visitor.create(object)
    .then((result) => {
        console.log(result);
        res.send({id: result.id});
    })

// --
    // console.log( req.body );

    // Visitor.insert( req.body.name, req.body.comment, function( result ){
    //     res.send({ id: result });
    // } );
}

exports.get_visitor = (req,res) => {
// select * from visitor where id = req.query.id limit 1
    models.Visitor.findOne({
    where: {id: req.query.id}
}).then((result) => {
    console.log(result);
    res.send({result: result});
})

// --
    // Visitor.get_visitor( req.query.id, function(result) {
    //     console.log( "result : ", result );
    //     res.send( { result : result[0] } );
    // })
}

exports.patch_comment = (req,res) => {
    let newObj = {
        name: req.body.name,
        comment: req.body.comment
    }
    // update visitor set name=req.body.name, comment=req.body.comment
    // models.Visitor.update(수정할 객체, 조건)
    models.Visitor.update(newObj, {where: {id: req.body.id}})
    .then((result) => {
        console.log(result);
        res.send('수정성공');
    })
// --
    // Visitor.update( req.body, function(result){
    //     console.log( result );
    //     res.send( "수정 성공" );
    // });
}

exports.delete_comment = (req,res) => {
    models.Visitor.destroy({
        where: {id: req.body.id}
    }).then((result) => {
        console.log(result);
        res.send('삭제 성공');
    })
// --
    // Visitor.delete( req.body.id, function(result){
    //     console.log( result );
    //     res.send( "삭제 성공" );
    // });
}