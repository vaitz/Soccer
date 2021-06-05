const soccerDB = require('../data-access/SoccerDB');

async function schedule(seasonName){
        // check field exists
        if(!seasonName){
            return {msg:"Missing field, make sure you entered the season name."};
        }

        

}