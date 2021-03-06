var express = require("express");
var router = express.Router();
const RescheduleMatch = require('../domain-usecases/RescheduleMatch');
const FARauth = require('../domain-usecases/FARauth');

//authentication to all incoming requests
router.use(async function (req, res, next) {
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

router.post('',async (req, res,next) => {
    try{
    // extract fields from the request body
    let { home_team,away_team, season, new_date, new_stadium} = req.body;

    // call the domain layer
    let msg = await RescheduleMatch.reschedule(home_team,away_team, season, new_date, new_stadium);
    
    // return status code
    if(msg == "Successfully reschedule the matche."){
        res.status(200).send({ message: msg, success: true });
    }else{
        res.status(400).send({ message: msg, success: false });
    }
}
    catch(error){
        next(error);
    }
});

module.exports = router;