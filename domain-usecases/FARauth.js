const soccerDB = require('../data-access/SoccerDB');

async function findFARbyUserName(userName){
    // check fields exists
    if(!userName){
        return false;
    }
    // check if he user requesting to to this action is FAR
    let ans = await soccerDB.findFARuserByUserName(userName);
    if(!ans){
        return false;
    }else{
        return true;
    }  
}

// expose the function that needs access outside the file (for the service layer)
exports.findFARbyUserName = findFARbyUserName;
