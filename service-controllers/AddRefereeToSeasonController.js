var express = require("express");
var router = express.Router();
const AddRefereeToSeason = require('../domain-usecases/AddRefereeToSeason');
const FARauth = require('../domain-usecases/FARauth');

//authentication to all incoming requests
app.use(async function (req, res, next) {
    if (req.session && req.session.userName) {
      const userName = req.session.userName;
      let ans = await FARauth.findFARbyUserName(userName);
      if (ans) {
        next();
      }
    } else {
      res.sendStatus(401); //Unauthorized
    }
  });
// RFA

router.post('',async (req, res) => {
    // // extract fields from the request body
    let { refereeUserName, league, season } = req.body;
    let ans = await AddRefereeToSeason.addRefereeToSeason(refereeUserName, league, season);
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