var express = require("express");
var router = express.Router();
const MatchesSchedule = require('../domain-usecases/MatchesSchedule');
const FARauth = require('../domain-usecases/FARauth');

// //authentication to all incoming requests
// router.use(async function (req, res, next) {
//     if (req.session && req.session.userName) {
//       const userName = req.session.userName;
//       let ans = await FARauth.findFARbyUserName(userName);
//       if (ans) {
//         next();
//       }
//     } else {
//       res.sendStatus(401); //Unauthorized
//     }
//   });
// // RFA

router.post('',async (req, res) => {
    // extract fields from the request body
    let { league, season } = req.body;
    let ans = await MatchesSchedule.schedule(league, season);
    let msg = ans.msg;
    if(msg.substring(0, msg.indexOf(',')) == 201){
        res.status(201).send({ message: msg.substring(msg.indexOf(',')+2),schedule: ans.schedule, success: true });
    }
    else{
        res.status(400).send({ message: msg, success: false });
    }
});

module.exports = router;