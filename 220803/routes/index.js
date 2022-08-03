const express = require('express');
const router = express.Router();
const user = require('../controller/usercontroller');

router.get('/a', function(req, res) {
    res.send('index');
})

router.get('/register', user.get_user);

module.exports = router;