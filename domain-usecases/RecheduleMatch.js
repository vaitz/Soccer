const soccerDB = require('../data-access/SoccerDB');

async function reschedule( home_team,away_team, seasonName, new_date, new_stedium){
        // check field exists
        if(!home_team || !away_team || !seasonName || !new_date || !new_stedium){
            return "Missing field, make sure you entered: home_team,away_team,season name,new_date, new_stedium.";
        }

        // get the season object
        let season = await soccerDB.getSeasonByName(seasonName);
        if(season == null){
            return "season not exists.";
        }

        // get the season matches array
        let matchArr = season.matchesScheduleArray;
        if(matchArr.length == 0){
            return "matches not exists in season.";
        }

        // get the home and away team ids
        let home_team_id = await soccerDB.getTeamID(home_team);
        let away_team_id = await soccerDB.getTeamID(away_team);

        // update the match date or stedium or both
        let ans = await soccerDB.findMatchAndUpdate(matchArr,home_team_id,away_team_id,new Date(new_date),new_stedium);

        return "Successfully reschedule the matche.";
}

// expose the function that needs access outside the file (for the service layer)
exports.reschedule = reschedule;

