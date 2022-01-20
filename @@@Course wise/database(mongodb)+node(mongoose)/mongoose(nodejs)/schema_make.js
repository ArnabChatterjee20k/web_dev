const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecart');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    // console.log("Connected successfully");
});

//Schema==type of restrriction on datatype we want to give.
//Model === final compiled schema
var KittySchema = new mongoose.Schema({
    name: String
});

// Locking  schema and we r converting it into model
var Kitten=mongoose.model("Kitten",KittySchema);//automatically a collection of plural form of kitten will be created. Kittens collection will created.  Now we can insert data and after that we have to save it to put the documents in the collection.
// Kittens will be created after the code but we have to save it to put the documnets
//We 
// making objects(here in mongodb which is known as documnets)
var arnabkitty= new Kitten({name:"tommy"})
// var arnabkitty= new Kitten({name:1}) 
//in this case if we pass an int ot will be convcerted to string and will saved

console.log(arnabkitty.name)

// we have to tell explicitly mention for saving data 

arnabkitty.save()
// we can pass a function which takes error(err) and even we can pass methods to run . It is present in the documnentation

// querying
Kitten.find( {name:"1"},function(err,queriedobject){
    console.log(queriedobject);
} )

