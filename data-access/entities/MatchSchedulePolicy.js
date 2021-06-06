// the MatchSchedulePolicy entity have the fields: name, rounds
module.exports = class MatchSchedulePolicy{
    constructor(name, rounds){
        this.name = name;
        this.rounds = rounds;
    }
}