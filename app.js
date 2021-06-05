const express = require('express')
const app = express();
app.use(express.json())
const morgan = require('morgan');
require("dotenv/config" );
app.use(morgan('dev'));
const session = require("client-sessions");


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

//settings cookies config
app.use(
  session({
    cookieName: "session", // the cookie key name
    secret: "IqFic484907I0T552hiMQ1UCJimRGL55", // the encryption key
    duration: 5 * 60 * 1000, // expired after 5 minutes
    activeDuration: 5 * 60 * 1000, // if expiresIn < activeDuration,
    //the session will be extended by activeDuration milliseconds
    cookie: {
      httpOnly: false,
    },
  })
);


const registerController = require('./service-controllers/RegisterController');
app.use("/register", registerController);

const loginController = require('./service-controllers/LoginController');
app.use("/login", loginController);

const AddRefereeToSeasonController = require('./service-controllers/AddRefereeToSeasonController');
app.use("/addRefereeToSeason", AddRefereeToSeasonController);


const RefereeScheduleController = require('./service-controllers/RefereeScheduleController');
app.use("/scheduleRefereesToSeason", RefereeScheduleController);

const MatchesScheduleController = require('./service-controllers/MatchesScheduleController');
app.use("/scheduleMatchesSeasonInLeague", MatchesScheduleController);

//if non of the above:
app.use((req, res) => {
  res.sendStatus(404);
});

app.use(function (err, req, res, next) {
  console.error(err);
  res
    .status(err.status || 500)
    .send({ message: err.message || "Internal Server Error", success: false });
});

const server = app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});

process.on("SIGINT", function () {
  if (server) {
    server.close(() => console.log("server closed"));
  }
  process.exit();
});

module.exports = app;
