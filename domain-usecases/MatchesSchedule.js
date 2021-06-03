const soccerDB = require('../data-access/SoccerDB');


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

const generateTournament = (participants, round1) => {
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

function randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  }
  


async function schedule(leagueName, seasonName){
    // check fields exists
    if(!leagueName || !seasonName){
        return "Missing fields, make sure you entered the following: league, season.";
    }

    // // check if user exists 
    // let exists = await soccerDB.findUserByUserName(userName);
    // if(!exists){
    //     console.log('User not exists in the DB');
    //     return "User not exists in the DB.";
    // }

    // let passwordDB = await soccerDB.getPasswordByUserName(userName);
    // if(!bcrypt.compareSync(password, passwordDB)){
    //     console.log("Username or Password incorrect");
    //     return "Username or Password incorrect";
    // }else{
    //     return "200, User login successfully.";
    // }


    

    // get the id,policy,teams id from league
    let league = await soccerDB.getLeagueDetails(leagueName);
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

    let tournamentRounds = generateTournament(teamsObj,round1);


    // get year from season
    let year = seasonName.substring(seasonName.indexOf('_')+1);
    console.log(year);

    // add date and hour for every fixture in season and det the home stedium
    let matches = [];
    console.log("Matches schedule:");
    tournamentRounds.forEach(fixture => {
        console.log("------------------------------")
        let date = randomDate(new Date(year, 1), new Date(year,12),'16:00','22:00');
        console.log(date);
        fixture.forEach(match => {
            console.log('match-')
            console.log('   home: '+match[0].name)
            console.log('   away: '+match[1].name)
            matches.push({home_team: match[0].id,away_team: match[1].id,date: date,stedium: match[0].stedium, refereesArray:[], eventLogArray:[] });
        });
    });

    console.log(matches);

    

    // save to the DB- matches and season(array)
    //await soccerDB.createSeason(season);

    // add season id to matches


    return tournamentRounds;
}



exports.schedule = schedule;

