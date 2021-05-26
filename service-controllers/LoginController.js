var express = require("express");
var router = express.Router();
const login = require('../domain-usecases/Login')

router.post('',async (req, res) => {
    try{
    // check that username exists
    let { userName, password } = req.body;
    const msg = await login.login(userName, password);
    
    massege_code = msg.substring(0, msg.indexOf(','))
    if (massege_code == 201){
        // Set cookie
        req.session.userName = userName;
        // return cookie
        res.status(200).send({ message: msg, success: true });
    }
      
    else {
      res
        .status(401)
        .send({ message: msg, success: false });
    }
    }catch(error){
        throw error;
    }
});

module.exports = router;
