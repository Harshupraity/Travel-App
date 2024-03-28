const express = require('express');
const signupHandler = require("../controllers/signupcontroller")
const loginHandler = require("../controllers/loginController")

const router = express.Router();
router.route("/register")
    .post(signupHandler) ;

    router.route("/login")
        .post(loginHandler);
module.exports = router;