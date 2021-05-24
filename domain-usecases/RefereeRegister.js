let Referee = require('../data-access/entities/Referee');



function register(userName, password, firstName, lastName, refType, DB){
    let newReferee = new Referee(userName, password, firstName, lastName, refType);
}

exports.register = register;