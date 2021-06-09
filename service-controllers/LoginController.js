var express = require("express");
var router = express.Router();
const login = require('../domain-usecases/Login')

router.post('',async (req, res, next) => {
    try{
        // check that username exists
        let { userName, password } = req.body;

        // call the domain layer
        const msg = await login.login(userName, password);
        
        // return status code
        massege_code = msg.substring(0, msg.indexOf(','))
        if (massege_code == 200){
            // Set cookie
            req.session.userName = userName;
            // return cookie
            res.status(200).send({ message: msg.substring(msg.indexOf(',')+2), success: true });
        }else {
            res
            .status(401)
            .send({ message: msg, success: false });
        }
    }catch(error){
        console.log(error)
        next(error);
    }
});

module.exports = router;
