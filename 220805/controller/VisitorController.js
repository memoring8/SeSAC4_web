const Visitor = require('../model/Visitor');

exports.get_visitor = (req, res) => {
    Visitor.get_visitor();
    res.render('index');
}

