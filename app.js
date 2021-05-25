const express = require('express')
const app = express();
app.use(express.json())
const morgan = require('morgan');
require("dotenv/config" );
app.use(morgan('dev'));
// const accessDB = require('../data-access/soccerDB');

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



// // connect to DB and add it to the request (save for later use)
// app.use(async function (req, res, next) {
//   console.log("connected to DB");
//   if(req.DB){
//     next();
//   }else{
//     let DB = accessDB.connectDB();
//     // if not connected?
//     req.DB = DB;
//     next();
//   }
  
// });

const registerController = require('./service-controllers/RegisterController');
app.use("/register", registerController);



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
