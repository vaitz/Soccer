// the Season entity have the fields: name, league, refereesArray, matchesScheduleArray, year
module.exports = class Season{
    constructor(name, league, refereesArray, matchesScheduleArray, year){
        this.name = name;
        this.league = league;
        this.refereesArray = refereesArray;
        this.matchesScheduleArray = matchesScheduleArray;
        this.year = year;
    }
}