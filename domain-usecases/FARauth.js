const soccerDB = require('../data-access/SoccerDB');

async function findFARbyUserName(userName){
    // check fields exists
    if(!userName){
        return "Missing userName field.";
    }

    // // check if the password are according to the rules
    // if(password.length < 6 || !(/\d/.test(password) && /[a-zA-Z]/.test(password))){
    //     return "The password entered is not according to the rules: more then 6 characters or equal, contains at least one letter and one digit.";
    // }

    // // change the password to hash- security
    // let hash_password = bcrypt.hashSync(
    //     password,
    //     parseInt(process.env.bcrypt_saltRounds)
    // );

    // // check if referee user exists 
    // let exists = await soccerDB.findUserByUserName(userName);
    // if(exists){
    //     console.log('User already exists in the DB');
    //     return "User already exists in the DB.";
    // }

    // // add referee to DB
    // await soccerDB.insertRefereeUser(userName, hash_password, firstName, lastName, refType);
    // await soccerDB.insertUser(userName, hash_password);
    // console.log('Referee added to the DB');
    // return "Referee added to the DB";
    

}

// expose the function that needs access outside the file (for the service layer)
exports. = ;
