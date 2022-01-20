const WebSocket = require("ws")

const wss = new WebSocket.Server({port:80})

// event for new client joined. In this event ws refers to a single connection to the server side
wss.on("connection", ws=>{
    console.log("New client")

// event for messaging
    ws.on("message",data =>{
        // console.log(`Client sent us--->`,data) //data is in form of buffer. we need to convert it into string
        console.log(`Client sent us---> ${data}`)
        console.log(`Client sent us---> `,String(data))

        ws.send("I am node server")//sending msg to client
    })
// if connection is closed or not
    ws.on("close",()=>{
        console.log("client disconnected")
    })
})