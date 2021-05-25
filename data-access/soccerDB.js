const Referee = require('./entities/Referee');
const User = require('./entities/User');

const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://tom:1234@soccersystem.7wihy.mongodb.net/test?authSource=admin&replicaSet=atlas-11jrfq-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
const dbName = "soccerSystemDB";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  })

async function makeDb () {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db(dbName);
}

// find
async function findUserByUserName(username){
    const DB = await makeDb();
    const result = await DB.collection("users").find({userName:username})
    const found = await result.toArray()
    if (found.length === 0) {
      return false;
    }
    return true;
}

// insert
async function insertUser(userName, password){
    const DB = await makeDb();
    let newUser = new User(userName, password);
    
    await DB.collection("users").insertOne(newUser);
    return true;
}

async function insertRefereeUser(userName, password, firstName, lastName, refType){
    const DB = await makeDb();
    let newReferee = new Referee(userName, password, firstName, lastName, refType);    
    await DB.collection("referees").insertOne(newReferee);
    return true;
}



// update

// delete


exports.findUserByUserName = findUserByUserName;
exports.insertUser = insertUser;
exports.insertRefereeUser = insertRefereeUser;