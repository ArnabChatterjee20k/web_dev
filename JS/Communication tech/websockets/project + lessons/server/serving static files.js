const WebSocket = require('ws');
const express = require('express');
const path = require("path")

app = express()
app.use("/",express.static(path.resolve(__dirname,"gui")))

const server = app.listen(9876) //express returns a server
const wss = new WebSocket.Server({
    server:server // initialising server to the 
})

//creating a pool of clients
const clients =[]

wss.on("connection",(ws)=>{
    clients.push(ws)
    ws.on("message", data=>{
        let msg = String(data)
        
        wss.clients.forEach(function each(client){
            if(client.readyState===WebSocket.OPEN) { // if client is having only valid connection then only send body
                client.send(msg)
            }
        })
    })
})