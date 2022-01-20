const express=require("express");
const path=require("path");
const app=express();
const port=80;


// EXPRESS SPECIFIC STUFF
app.use("/static",express.static("static"));

// PUG SPECIFIC STUFF/CONFIG
app.set("view engine","pug")
app.set("views",path.join(__dirname,"views")) 

// ENDPOINTS   
app.get("/",(req,res)=>{
    const con=" content send assigned sing varibale"
    const params={"content":con};//passing variables to the pug
    res.status(200).render("tutorial index.pug",params)
})

// START THE SERVER
app.listen(port,()=>{
    console.log(`The application started on ${port}`);
})