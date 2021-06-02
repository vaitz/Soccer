function main() {

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
    
    
    
    const testData = [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "tom"
    ];
  
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
  
    const generateTournament = (participants) => {
        const tournamentRounds = [];
        const rounds = Math.ceil(participants.length - 1);
        newPraticpants = shuffle(participants);
        let p = Array.from(newPraticpants);
        var flag = true;

        if (flag) {
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
  
    console.log(generateTournament(testData));
}


main();
