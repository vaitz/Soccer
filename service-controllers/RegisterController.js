var express = require("express");
const bcrypt = require("bcrypt");
var router = express.Router();
const RefereeRegister = require('../domain-usecases/RefereeRegister');

router.post('',async (req, res) => {
    let { userName, password, firstName, lastName, accountType } = req.body;
    let hash_password = bcrypt.hashSync(
        password,
        parseInt(process.env.bcrypt_saltRounds)
    );



    if(accountType == "Referee"){
        let refType = req.body.refType;
        let ans =await RefereeRegister.register(userName, hash_password, firstName, lastName, refType);
        //status
        if(ans){
            res.sendStatus(201);
        }else{
            res.sendStatus(400);
        }
    }

});

module.exports = router;