// the Match entity have the fields: home_team, away_team, date, stadium, refereesArray, eventLogArray
module.exports = class Match{
    constructor(home_team, away_team, date, stadium, refereesArray, eventLogArray){
        this.home_team = home_team;
        this.away_team = away_team;
        this.date = date;
        this.stadium = stadium;
        this.refereesArray = refereesArray;
        this.eventLogArray = eventLogArray;
    }
}