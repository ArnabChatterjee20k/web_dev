const express=require("express");
const path=require("path");
const app=express();
const port=80;

// serving static files.first one is static and the other one is folder name
app.use("/static",express.static("static"));


// set the template engine as pug
app.set("view engine","pug")

// Set the views directory.View also can be written as templates
app.set("views",path.join(__dirname,"views")) 

// pug demo endpoint
app.get("/demo",(req,res)=>{
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!',para:"Hello" })
})


// Whenever we we will go to "/" endpoint then run the callback which is a arrow function which takes request and response.get means to accprt get request
app.get("/",(req,res)=>{
    res.send("This is an express app");
})

app.get("/about",(req,res)=>{
    res.status(200).send("This is an express ap of about");//we can send code status in this way
})

// to accpet post request
app.post("/lost",(req,res)=>{
    res.send("Post");
    console.log(req);
})

app.listen(port,()=>{
    console.log(`The application started on ${port}`);
})