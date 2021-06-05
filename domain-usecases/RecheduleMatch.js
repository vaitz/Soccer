const soccerDB = require('../data-access/SoccerDB');

async function reschedule( home_team,away_team, seasonName, new_date, new_stedium){
        // check field exists
        if(!home_team || !away_team || !seasonName || !new_date || !new_stedium){
            return "Missing field, make sure you entered: home_team,away_team,season name,new_date, new_stedium.";
        }

        let season = await soccerDB.getSeasonByName(seasonName);
        if(season == null){
            return "season not exists.";
        }

        let matchArr = season.matchesScheduleArray;
        if(matchArr.length == 0){
            return "matches not exists in season.";
        }

        let home_team_id = await soccerDB.getTeamID(home_team);
        let away_team_id = await soccerDB.getTeamID(away_team);

        let ans = await soccerDB.findMatchAndUpdate(matchArr,home_team_id,away_team_id,new Date(new_date),new_stedium);

        // let ans = await matchArr.forEach(async function(matchID) {
            
        //     // i += 1;
        //     // i = i % refArr.length;
        //     // let ans = await soccerDB.updateMatcheReferee(matchID,refArr[i]);
        //     // if(ans.value == null){
        //     //     return "something went wrong..";
        //     // }
        // });

        // if(ans == "something went wrong.."){
        //     return ans;
        // }

        return "Successfully reschedule the matche.";
}

// expose the function that needs access outside the file (for the service layer)
exports.reschedule = reschedule;

