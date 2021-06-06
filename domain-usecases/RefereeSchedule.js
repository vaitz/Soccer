const soccerDB = require('../data-access/SoccerDB');

async function schedule(seasonName){
        // check field exists
        if(!seasonName){
            return "Missing field, make sure you entered the season name.";
        }

        // get the season object
        let season = await soccerDB.getSeasonByName(seasonName);
        if(season == null){
            return "season not exists.";
        }

        // get the season referees array
        let refArr = season.refereesArray;
        if(refArr.length == 0){
            return "referees not exists in season.";
        }

        // get the season matches array
        let matchArr = season.matchesScheduleArray;
        if(matchArr.length == 0){
            return "matches not exists in season.";
        }

        // schedule referees in matches
        let i = -1;
        let ans = await matchArr.forEach(async function(matchID) {
            i += 1;
            i = i % refArr.length;
            let ans = await soccerDB.updateMatcheReferee(matchID,refArr[i]);
            if(ans.value == null){
                return "something went wrong..";
            }
        });

        if(ans == "something went wrong.."){
            return ans;
        }

        return "201, Successfully schedule referees to matches in season.";
}

// expose the function that needs access outside the file (for the service layer)
exports.schedule = schedule;