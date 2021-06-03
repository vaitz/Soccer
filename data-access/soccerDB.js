const Referee = require('./entities/Referee');
const Season = require('./entities/Season');
const Match = require('./entities/Match');
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

async function getLeagueDetails(leagueName){
  const DB = await makeDb();
  const result = await DB.collection("leagues").find({name:leagueName});
  const leagueObj = await result.toArray();
  if (leagueObj.length === 0) {
    return null;
  }
  return {id:leagueObj[0]._id,policy:leagueObj[0].matchSchedulingPolicy,teams:leagueObj[0].teamsArray};
}

async function getRoundsPolicy(policyID){
  const DB = await makeDb();
  const result = await DB.collection("MatchSchedulingPolicy").find({_id:policyID});
  const policyObj = await result.toArray();
  if (policyObj.length === 0) {
    return null;
  }
  return policyObj[0].rounds;
}

async function createSeason(season){
  const DB = await makeDb();
  let seasonObj = new Season(season.name,season.league,season.refereesArray,season.matchesScheduleArray,season.year);
  const result = await DB.collection("seasons").insertOne(seasonObj);
  if(result.insertedId == null){
    return false;
  }
  return true;
}

async function createMatches(matches){
  const DB = await makeDb();
  let matchesObj = matches.map(match=>new Match(match.home_team,match.away_team,match.date,match.stedium,match.refereesArray,match.eventLogArray));
  const result = await DB.collection("matches").insertMany(matchesObj, forceServerObjectId=true);
  if(result.insertedIds == null){
    return null;
  }
  return Object.entries(result.insertedIds).map(id=>id[1]);
}

async function getTeamsName(teamsIDarray){
  const DB = await makeDb();
  const result = await DB.collection("teams").find({_id:{$in: teamsIDarray}});
  const teams = await result.toArray();
  if (teams.length === 0) {
    return null;
  }
  
  let teamsName = teams.map(function(team){ return {id: team._id,name: team.name, stedium: team.stedium}; });
  return teamsName;
}

// find user in the users collection by username
async function findUserByUserName(username){
    const DB = await makeDb();
    const result = await DB.collection("users").find({userName:username});
    const found = await result.toArray();
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
exports.getLeagueDetails = getLeagueDetails;
exports.getTeamsName = getTeamsName;
exports.getRoundsPolicy = getRoundsPolicy;
exports.createMatches = createMatches;
exports.createSeason =createSeason;