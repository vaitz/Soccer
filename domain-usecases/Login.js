const soccerDB = require('../data-access/SoccerDB');
const bcrypt = require("bcrypt");



async function login(userName, password){
    // check fields exists
    if(!userName || !password){
        return "Missing fields, make sure you entered the following: userName, password.";
    }

    // check if user exists 
    let exists = await soccerDB.findUserByUserName(userName);
    if(!exists){
        console.log('User not exists in the DB');
        return "User not exists in the DB.";
    }

    let passwordDB = await soccerDB.getPasswordByUserName(userName);
    if(!bcrypt.compareSync(password, passwordDB)){
        console.log("Username or Password incorrect");
        return "Username or Password incorrect";
    }else{
        return "User login successfully.";
    }
}

exports.login = login;