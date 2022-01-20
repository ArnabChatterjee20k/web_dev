const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecart');
// if the db or host not found it will try searching and after sometime it will print error

const db = mongoose.connection;

// if any error 
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    // if connected the callback will run
    console.log("Connected successfully");
});
