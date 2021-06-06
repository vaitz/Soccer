// the Referee entity have the fields: userName, password, firstName, lastName, refType
module.exports = class Referee{
    constructor(userName, password, firstName, lastName, refType){
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.refType = refType;
    }
}

