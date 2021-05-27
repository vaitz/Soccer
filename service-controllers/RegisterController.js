var express = require("express");
var router = express.Router();
const RefereeRegister = require('../domain-usecases/RefereeRegister');

router.post('',async (req, res) => {
    // extract fields from the request body
    try{
    let { userName, password, firstName, lastName, accountType } = req.body;
    if(accountType == "Referee"){
        let refType = req.body.refType;
        let msg = await RefereeRegister.register(userName, password, firstName, lastName, refType);

        massege_code = msg.substring(0, msg.indexOf(','));
        if(massege_code == 201){
            res.status(201).send({ message: msg, success: true });
        }else{
            res.status(400).send({ message: msg, success: false });
        }
    }
    }
    catch(error){
        throw error;
    }

});

module.exports = router;