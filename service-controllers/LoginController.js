var express = require("express");
var router = express.Router();
const login = require('../domain-usecases/Login')

router.post('',async (req, res) => {
    
    // check that username exists
    let { userName, password } = req.body;
    const ans = await login.login(userName, password);
    if (ans == "User login successfully."){
        // Set cookie
        req.session.userName = userName;
        // return cookie
        res.status(200).send({ message: ans, success: true });
    }
      
    else {
      res
        .status(401)
        .send({ message: ans, success: false });
    }

});

module.exports = router;
