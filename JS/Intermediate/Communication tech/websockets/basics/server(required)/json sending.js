const WebSocket = require("ws")

const wss = new WebSocket.Server({port:80})

wss.on("connection", ws=>{
    console.log("New client")

    ws.on("message",data =>{
        try {
            let msg = JSON.parse(data) // it will not parse string. Only json string can be parsed. So server may crash if we only strings are send so use try catch
            console.log(`Client sent us--->`,msg)

            ws.send(`Your location x=${msg.x} and y=${msg.y}`)//sending msg to client
        } catch (error) {
            console.log("error")
            ws.send("some error occured. Must send json strinfied object")
        }
        
    })
    ws.on("close",()=>{
        console.log("client disconnected")
    })
})