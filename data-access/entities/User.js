// the User entity have the fields: userName, password
module.exports = class User{
    constructor(userName, password){
        this.userName = userName;
        this.password = password;
    }
}