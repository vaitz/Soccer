const soccerDB = require('../data-access/SoccerDB');

// ------------------------------------------------------------------
// internal functions for matches scheduling
function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

const matchParticipants = (participants,rounds,sec) => {
    const p = Array.from(participants);
    if (p % 2 == 1) {
        p.push(null);
    }
    const pairings = [];
    while (p.length != 0) {
        if (rounds % 2 == 0) {
            participantA = p.shift();
            participantB = p.pop();
        }
        else {
            participantA = p.pop();
            participantB = p.shift();
        }
        if (participantA != undefined && participantB != undefined) {
            if (sec) 
                pairings.push([participantB, participantA]);
            else 
                pairings.push([participantA, participantB]);
        }
    }
    return pairings;
};

const rotateArray = (array) => {
    const p = Array.from(array);
    const firstElement = p.shift();
    const lastElement = p.pop();
    return [firstElement, lastElement, ...p];
};

const generateMatches = (participants, round1) => {
    const tournamentRounds = [];
    const rounds = Math.ceil(participants.length - 1);
    newPraticpants = shuffle(participants);
    let p = Array.from(newPraticpants);

    if (round1) {
        for (let i = 0; i < rounds; i++) {
            tournamentRounds.push(matchParticipants(p,i));
            p = rotateArray(p);
        }
    }
    else
    {
        for (let i = 0; i < rounds; i++) {
            tournamentRounds.push(matchParticipants(p,i));
            p = rotateArray(p);
        }
        var sec=true
        for (let i = 0; i < rounds; i++) {
            tournamentRounds.push(matchParticipants(p,i,sec));
            p = rotateArray(p);
        }
    }
    
    return tournamentRounds;
};

// get random date between the start date and the end date and the start hour and end hour
function randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}

// ------------------------------------------------------------------
// the main schedule function
async function schedule(leagueName, seasonName){
    // check fields exists
    if(!leagueName || !seasonName){
        return {msg:"Missing fields, make sure you entered the following: league, season."};
    }

    // get the id,policy,teams id from league
    let league = await soccerDB.getLeagueDetails(leagueName);

    // check league
    if(league == null){
        return {msg:"league not exists."};
    }

    // get the matches policy from league- check if its 2 rounds or 1
    let policyID = league.policy;
    let roundNumber = await soccerDB.getRoundsPolicy(policyID);

    let teamsID = league.teams;
    // get the teams names (objects with id and name)
    let teamsObj = await soccerDB.getTeamsName(teamsID);

    round1 = false;
    if(roundNumber == 1){
        round1 = true;
    }

    // generate matches with round robin algorithem
    let tournamentRounds = generateMatches(teamsObj,round1);

    // get year from season
    let year = seasonName.substring(seasonName.indexOf('_')+1);

    // add date and hour for every fixture in season and det the home stadium
    let matches = [];
    let returnMatches = [];
    tournamentRounds.forEach(fixture => {
        let date = randomDate(new Date(year, 1), new Date(year,12),'16:00','22:00');
        fixture.forEach(match => {
            matches.push({home_team: match[0].id,away_team: match[1].id,date: date,stadium: match[0].stadium, refereesArray:[], eventLogArray:[] });
            returnMatches.push({home_team: match[0].name,away_team: match[1].name,date: date,stadium: match[0].stadium});
        });
    });

    // creating matches in the DB
    let matchesIDs = await soccerDB.createMatches(matches);

    // creating the season in the DB
    let season = {name: seasonName,league: league.id,matchesScheduleArray: matchesIDs,year: year,refereesArray:[]};
    let created = await soccerDB.createSeason(season);

    if(!created){
        return {msg:'Something went wrong..'};
    }else{
        return {msg:"201, Season and Matches added to the DB.", schedule: returnMatches};
    }
}

// expose the function that needs access outside the file (for the service layer)
exports.schedule = schedule;

