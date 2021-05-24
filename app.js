const express = require('express')
const app = express();
app.use(express.json())
const morgan = require('morgan');
require("dotenv/config" );
app.use(morgan('dev'));
const accessDB = require('../data-access/soccerDB');

const port = process.env.PORT || "3000";




app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});



app.use(async function (req, res, next) {
  console.log("connect to MongoDB");
  let DB = accessDB.connectDB();
  req.DB = DB;
  next();
  // if not connected?
});

const registerController = require('./service-controllers/RegisterController');
app.use("/register", registerController);

//   const userRoutes = require('./routes/users/user');
//   app.use("/user", userRoutes);
//   const teamRoutes = require('./routes/team');
//   app.use("/team", teamRoutes);
//   const refereeRoutes = require('./routes/users/referee');
//   app.use("/referee", refereeRoutes);
//   const coachRoutes = require('./routes/users/coach');
//   app.use("/coach", coachRoutes);
//   const playerRoutes = require('./routes/users/player');
//   app.use("/player", playerRoutes);
//   const teamOwnerRoutes = require('./routes/users/teamOwner');
//   app.use("/teamowner", teamOwnerRoutes);
//   const teamMangerRoutes = require('./routes/users/teamManger');
//   app.use("/teammanger", teamMangerRoutes);
//   const representativeFootballAssociationRoutes = require('./routes/users/representativeFootballAssociation');
//   app.use("/representFA", representativeFootballAssociationRoutes);
//   const leagueRoutes = require('./routes/league');
//   app.use("/league", leagueRoutes);
//   const seasonRoutes = require('./routes/season');
//   app.use("/season", seasonRoutes);
//   const matchRoutes = require('./routes/match');
//   app.use("/match", matchRoutes);



  app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
  });
  
  app.use((req, res, next) => {
    const error = new Error(`Not found | Invalid url path: ${req.headers.host}${req.url}`);
    error.status = 404;
    next(error);
  });

  module.exports = app;
