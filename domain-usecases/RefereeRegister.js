const soccerDB = require('../data-access/soccerDB')



async function register(userName, password, firstName, lastName, refType){
    // check fields exists
    if(!userName || !password || !firstName || !lastName || !refType){
        return false;
    }

    // check if referee user exists 
    let exists = await soccerDB.findByUserName(userName);
    if(exists){
        console.log('Referee already exists in the DB');
        return false;
    }

    // add referee to DB
    await soccerDB.insertRefereeUser(userName, password, firstName, lastName, refType);
    console.log('Referee added to the DB');
    return true;
    

}

exports.register = register;
