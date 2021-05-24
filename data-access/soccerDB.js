const mongoose = require('mongoose');


async function connectDB(){
    await mongoose.connect(process.env.DB_CONNECTION_STRING, 
        { useUnifiedTopology: true,useNewUrlParser: true,useFindAndModify: false, useCreateIndex: true  })
        .then(client => {
          console.log('Connected to Database')
        })
        .catch(error => console.error(error))

    return mongoose;
}

exports.connectDB = connectDB;