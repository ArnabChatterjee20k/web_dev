const http=require("http");
const fs=require("fs");

const hostname = '127.0.0.1';
const port = 3000;

const home=fs.readFileSync("index.html");
// const services=fs.readFileSync("services.html");
// const about=fs.readFileSync("about.html");

const server=http.createServer((req,res)=>{

    console.log(req.url)//to print the what the user wanted to visit or what is being hit.Or basically what the request user  made to the server
    url=req.url;
    res.statusCode=200;
    // res.setHeader("Content-Type","text/plain")
    res.setHeader("Content-Type","text/html")

    if (url=="/"){
        res.end(home)
    }
    
    else if (url=="/services"){
        res.end("<h1>Service</h1>")
    }
    
    else if (url=="/about"){
        res.end("<h1>about</h1>")
    }

    else{
        res.statusCode=404;
        res.end("<h1>Not found</h1>")
    }
    
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});