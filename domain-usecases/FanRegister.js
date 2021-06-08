const soccerDB = require('../data-access/SoccerDB');
const bcrypt = require("bcrypt");

// regression test 2
async function register(userName, password, firstName, lastName){
    // check fields exists
    if(!userName || !password || !firstName || !lastName){
        return "Missing fields, make sure you entered the following: userName, password, firstName, lastName.";
    }

    // check if the password are according to the rules
    if(password.length < 6 || !(/\d/.test(password) && /[a-zA-Z]/.test(password))){
        return "The password entered is not according to the rules: more then 6 characters or equal, contains at least one letter and one digit.";
    }

   
    // change the password to hash- security
    let hash_password = bcrypt.hashSync(
        password,
        parseInt(process.env.bcrypt_saltRounds)
    );

    // check if fan user exists 
    let exists = await soccerDB.findUserByUserName(userName);
    if(exists){
        // console.log('User already exists in the DB');
        return "User already exists in the DB.";
    }

    // // add fan to DB
    // await soccerDB.insertFanUser(userName, hash_password, firstName, lastName);
    // await soccerDB.insertUser(userName, hash_password);
    // console.log('Referee added to the DB');
    return "201, Fan added to the DB";
    

}

// expose the function that needs access outside the file (for the service layer)
exports.register = register;
