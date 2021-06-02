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

async function getTeamsInLeague(leagueName){
  const DB = await makeDb();
  const result = await DB.collection("leagues").find({name:leagueName})
  const leagueObj = await result.toArray();
  if (leagueObj.length === 0) {
    return null;
  }
  return leagueObj[0].teamsArray;
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

async function findFARuserByUserName(username){
  const DB = await makeDb();
    const result = await DB.collection("FARs").find({userName:username})
    const found = await result.toArray()
    if (found.length === 0) {
      return false;
    }
    return true;
}

// async function findRefereeUserByUserName(username){
//   const DB = await makeDb();
//     const result = await DB.collection("referees").find({userName:username})
//     const found = await result.toArray()
//     if (found.length === 0) {
//       return false;
//     }
//     return true;
// }

// async function findLeagueByName(name){
//   const DB = await makeDb();
//     const result = await DB.collection("leagues").find({name:name})
//     const found = await result.toArray();
//     if (found.length === 0) {
//       return false;
//     }
//     return true;
// }

async function findSeasonByName(name){
  const DB = await makeDb();
    const result = await DB.collection("seasons").find({name:name})
    const found = await result.toArray();
    if (found.length === 0) {
      return false;
    }
    return true;
}

// find referee user in the referees collection by username and return the id
async function getRefereeIdByUserName(username){
  const DB = await makeDb();
  const result = await DB.collection("referees").find({userName:username});
  const user = await result.toArray();
  if (user.length === 0) {
    return null;
  }
  return user[0]._id;
}

async function getLeagueIdByName(leagueName){
  const DB = await makeDb();
  const result = await DB.collection("leagues").find({name:leagueName});
  const league = await result.toArray();
  if (league.length === 0) {
    return null;
  }
  return league[0]._id;
}

// async function getSeasonIdByName(seasonName){
//   const DB = await makeDb();
//   const result = await DB.collection("seasons").find({name:seasonName})
//   const season = await result.toArray();
//   console.log(season[0]._id);
//   return season[0]._id;
// }

async function addRefereeIDtoSeason(seasonName,refereeID){
    const DB = await makeDb();
    const result = await DB.collection("seasons").findOneAndUpdate({name:seasonName},{ $push: {refereesArray: refereeID}});
    // check if not working?
  }

async function checkLeagueInSeasonById(seasonName,leagueID){
  const DB = await makeDb();
  const result = await DB.collection("seasons").find({name:seasonName})
  const season = await result.toArray();
  return season[0].league.equals(leagueID);
}

// find user in the users collection by username and return the password
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

// async function main() {
//   var quote =await checkLeagueInSeasonById("2021", "60af7cf79c0c05a79d219c59");

//   console.log('3', quote);
// }
// main();



// expose the functions that needs access outside the file (for the domain layer)
exports.findUserByUserName = findUserByUserName;
exports.findFARuserByUserName = findFARuserByUserName;
exports.getPasswordByUserName = getPasswordByUserName;
exports.insertUser = insertUser;
exports.insertRefereeUser = insertRefereeUser;
exports.getRefereeIdByUserName = getRefereeIdByUserName;
// exports.findRefereeUserByUserName = findRefereeUserByUserName;
// exports.findLeagueByName = findLeagueByName;
exports.findSeasonByName = findSeasonByName;
exports.getLeagueIdByName = getLeagueIdByName;
// exports.getSeasonIdByName = getSeasonIdByName;
exports.checkLeagueInSeasonById = checkLeagueInSeasonById;
exports.addRefereeIDtoSeason = addRefereeIDtoSeason;
exports.getTeamsInLeague = getTeamsInLeague;