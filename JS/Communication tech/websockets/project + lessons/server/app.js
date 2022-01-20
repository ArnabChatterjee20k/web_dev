const WebSocket = require('ws');

const wss = new WebSocket.Server({
    port:9876
})

//creating a pool of clients
const clients =[]

wss.on("connection",(ws)=>{
    clients.push(ws)
    ws.on("message", data=>{
        let msg = String(data)
        
        // ws.send("Ok I have listened "+data) // single client
        
        //broadcasting to all clients
        // clients.forEach((c,index) => {c.send(`client${index+1} --->${msg}`)})

        // better way of broadcasting
        wss.clients.forEach(function each(client){
            if(client.readyState===WebSocket.OPEN) { // if client is having only valid connection then only send body
                client.send(msg)
            }
        })
    })
})