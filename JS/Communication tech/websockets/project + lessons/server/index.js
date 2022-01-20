const WebSocket = require("ws")

// const wss = new WebSocket.Server({
//     port:9876
// }, function(){
//     console.log("WebSocket ready") //callback
// instead of using callback to see the on connection we can use eventlisteners
//  })
// )

const wss = new WebSocket.Server({
    port:9876
})
wss.on("connection",(ws)=>{ // ws means the websocket. it will help us to send messages like the ws in the client
    // console.log(ws)
    ws.send("hlw from server")

    // event on receiving message
    ws.on("message",data=>{console.log(String(data))})
})