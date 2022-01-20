const http=require("http");
const fs=require("fs");

http.createServer((req,res)=>{
    res.end("Ok");
}).listen(80,"127.0.0.1",()=>{
    console.log("hi");
});