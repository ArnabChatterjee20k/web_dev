const express=require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const port=80;

//EXPRESS stuff
app.use("/static",express.static("static"));
app.use(express.urlencoded())


//PUG stuff
app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));

// ENDPOINTS
app.get("/",(req,res)=>{
    res.status(200).render("index.pug");
});
// creating endpoint for accepting post request
app.post("/",(req,res)=>{
    console.log(req.body)//we must use express.urlencoded() to parse the request
    // { name: 'asas', address: '', message: '' } we will get this json object. Now the keys here are the names given to the form inputs
    
    let name=req.body.name;
    let address=req.body.address;
    let message=req.body.message;

    let outputTowrite=`name is ${name} resides at ${address} told ${message}\n`;
    fs.appendFileSync("output.txt",outputTowrite);

    // res.status(200).send("YEs");
    const params={"message":"submitted succesfully"}
    res.status(200).render("index.pug",params);
})
app.listen(port,()=>{
    console.log(`running on ${port}`);
});