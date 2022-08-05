const Visitor = require("../model/Visitor");

exports.get_visitors = async (req,res) => {
    Visitor.get_visitors(function(result){
        console.log('result: ', result);
        console.log('index');
        res.render("index", {data: result});
    });
}