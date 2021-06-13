const soccerDB = require('../data-access/SoccerDB');
const bcrypt = require("bcrypt");
const constant = require("../constant/constant")

async function register(userName, password, firstName, lastName, refType) {
    

    // check fields exists
    if(!userName || !password || !firstName || !lastName || !refType){
        return "Missing fields, make sure you entered the following: userName, password, firstName, lastName, refType.";
    }

    // check if the password are according to the rules
    if(password.length < 6 || !(/\d/.test(password) && /[a-zA-Z]/.test(password))){
        return "The password entered is not according to the rules: more then 6 characters or equal, contains at least one letter and one digit.";
    }

    if(!Object.values(constant.refeereType).includes(refType)) {
        return "Referee Type is not valid";
    }


    // change the password to hash- security
    let hash_password = bcrypt.hashSync(
        password,
        parseInt(process.env.bcrypt_saltRounds)
    );

    // check if referee user exists 
    let exists = await soccerDB.findUserByUserName(userName);
    if(exists){
        // console.log('User already exists in the DB');
        return "User already exists in the DB.";
    }

    // add referee to DB
    await soccerDB.insertRefereeUser(userName, hash_password, firstName, lastName, refType);
    await soccerDB.insertUser(userName, hash_password);
    console.log('Referee added to the DB');
    
    return "201, Referee added to the DB";
  //  return "regression test try1";

    

}

// expose the function that needs access outside the file (for the service layer)
exports.register = register;
