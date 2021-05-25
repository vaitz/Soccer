var express = require("express");
var router = express.Router();
const RefereeRegister = require('../domain-usecases/RefereeRegister');

router.post('',async (req, res) => {
    // extract fields from the request body
    let { userName, password, firstName, lastName, accountType } = req.body;
    if(accountType == "Referee"){
        let refType = req.body.refType;
        let msg = await RefereeRegister.register(userName, password, firstName, lastName, refType);

        if(msg == 'Referee added to the DB'){
            res.status(201).send({ message: msg, success: true });
        }else{
            res.status(400).send({ message: msg, success: false });
        }
    }

});

module.exports = router;