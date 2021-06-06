var express = require("express");
var router = express.Router();
const RefereeRegister = require('../domain-usecases/RefereeRegister');

router.post('',async (req, res) => {
    // extract fields from the request body
    try{
        let { userName, password, firstName, lastName, accountType } = req.body;
        if(accountType == "Referee"){
            let refType = req.body.refType;
            // call the domain layer
            let msg = await RefereeRegister.register(userName, password, firstName, lastName, refType);

            // return status code
            massege_code = msg.substring(0, msg.indexOf(','));
            if(massege_code == 201){
                res.status(201).send({ message: msg.substring(msg.indexOf(',')+2), success: true });
            }else{
                res.status(400).send({ message: msg, success: false });
            }
        }
        // for later- other type of user registers
    }
    catch(error){
        throw error;
    }

});

module.exports = router;