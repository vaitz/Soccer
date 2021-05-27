
var express = require("express");
var router = express.Router();
const AddRefereeToSeason = require('../domain-usecases/AddRefereeToSeason');

//authentication to all incoming requests
app.use(async function (req, res, next) {
    if (req.session && req.session.userName) {
      const userName = req.session.userName;
      if () {
        next();
      }
    } else {
      res.sendStatus(401); //Unauthorized
    }
  });
// RFA

router.post('',async (req, res) => {
    // // extract fields from the request body
    let { RefereeUserName, league, season } = req.body;
    // if(accountType == "Referee"){
    //     let refType = req.body.refType;
    //     let msg = await RefereeRegister.register(userName, password, firstName, lastName, refType);

    //     if(msg == 'Referee added to the DB'){
    //         res.status(201).send({ message: msg, success: true });
    //     }else{
    //         res.status(400).send({ message: msg, success: false });
    //     }
    // }

});

module.exports = router;