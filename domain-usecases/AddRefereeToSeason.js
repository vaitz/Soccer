const soccerDB = require('../data-access/SoccerDB');

async function addRefereeToSeason(refereeUserName, league, season){
    // check fields exists
    if(!refereeUserName || !league || !season ){
        return "Missing fields, make sure you entered the following: refereeUserName, league, season.";
    }


    // check if the referee, league and season exists in the DB
    let refereeID = await soccerDB.getRefereeIdByUserName(refereeUserName);
    let leagueID = await soccerDB.getLeagueIdByName(league);
    let ansSeason = await soccerDB.findSeasonByName(season);

    // if(!ansRef || !ansLeague || !ansSeason){
    //     return "One or more of the entities not exists in the DB."
    // }



    // check if the season is in this league
    let ans = await soccerDB.checkLeagueInSeasonById(season, leagueID);
    if(!ans){
        return "This season isn't part of this league."
    }

    // add referee to season
    let finAns = await soccerDB.addRefereeIDtoSeason(season, refereeID);

    if(finAns){
        return "Referee added to the season successfully";
    }else{
        return "problem";
    }

    // let seasonID = await soccerDB.getSeasonIdByName(season);   

}

// expose the function that needs access outside the file (for the service layer)
exports.addRefereeToSeason = addRefereeToSeason;



