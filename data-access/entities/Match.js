module.exports = class Match{
    constructor(home_team, away_team, date, stedium, refereesArray, eventLogArray){
        this.home_team = home_team;
        this.away_team = away_team;
        this.date = date;
        this.stedium = stedium;
        this.refereesArray = refereesArray;
        this.eventLogArray = eventLogArray;
    }
}