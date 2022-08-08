const express = require("express");
const user = require("../controller/usercontroller");
const router = express.Router();

router.get('/', user.sign);
router.get('/signup', user.get_signup);
// router.post('/signup', user.signup);
router.get('/signin', user.get_signin);
// router.post('/signin', user.signin);

module.exports = router;