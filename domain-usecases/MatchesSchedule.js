const soccerDB = require('../data-access/SoccerDB');

// const teams = [
//     "Red",
//     "Orange",
//     "Yellow",
//     "Green",
//     "Blue",
//     "tom"
// ];

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

const generateTournament = (participants, round2) => {
    const tournamentRounds = [];
    const rounds = Math.ceil(participants.length - 1);
    newPraticpants = shuffle(participants);
    let p = Array.from(newPraticpants);

    if (round2) {
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

async function schedule(league){
    // // check fields exists
    // if(!userName || !password){
    //     return "Missing fields, make sure you entered the following: userName, password.";
    // }

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
    let teams = await soccerDB.getTeamsInLeague(league);
    let tournamentRounds = generateTournament(teams);
    console.log(tournamentRounds);
}



exports.schedule = schedule;

// schedule();