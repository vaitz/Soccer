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
    let msg = await MatchesSchedule.schedule(league, season);

    res.status(200).send({ message: "d", success: true });
    // if(msg == "Referee added to the season successfully"){
    //     res.status(201).send({ message: msg, success: true });
    // }else{
    //     res.status(400).send({ message: msg, success: false });
    // }


});

module.exports = router;