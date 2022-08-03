exports.get_receive = (res, req) => {
    res.render('receive', req.query);
}

exports.post_receive = (res, req) => {
    res.render('receive', req.body);
}
