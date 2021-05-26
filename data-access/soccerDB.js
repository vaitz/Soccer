const Referee = require('./entities/Referee');
const User = require('./entities/User');
const {MongoClient} = require('mongodb');

// constants for the DB connection
const URI = "mongodb+srv://tom:1234@soccersystem.7wihy.mongodb.net/test?authSource=admin&replicaSet=atlas-11jrfq-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
const DB_NAME = "soccerSystemDB";
const CLIENT = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true  })

// returns the DB- if its is not connected it creates the connection
async function makeDb () {
  if (!CLIENT.isConnected()) {
    await CLIENT.connect();
  }
  return CLIENT.db(DB_NAME);
}

// find user in the users collection by username
async function findUserByUserName(username){
    const DB = await makeDb();
    const result = await DB.collection("users").find({userName:username})
    const found = await result.toArray()
    if (found.length === 0) {
      return false;
    }
    return true;
}

// find user in the users collection by username and return hes password
async function getPasswordByUserName(username){
    const DB = await makeDb();
    const result = await DB.collection("users").find({userName:username})
    const user = await result.toArray();
    return user[0].password;
}

// insert general user to users collection
async function insertUser(userName, password){
    const DB = await makeDb();
    let newUser = new User(userName, password);
    
    await DB.collection("users").insertOne(newUser);
    return true;
}

// insert referee user to referees collection
async function insertRefereeUser(userName, password, firstName, lastName, refType){
    const DB = await makeDb();
    let newReferee = new Referee(userName, password, firstName, lastName, refType);    
    await DB.collection("referees").insertOne(newReferee);
    return true;
}



// update

// delete


// expose the functions that needs access outside the file (for the domain layer)
exports.findUserByUserName = findUserByUserName;
exports.getPasswordByUserName = getPasswordByUserName;
exports.insertUser = insertUser;
exports.insertRefereeUser = insertRefereeUser;