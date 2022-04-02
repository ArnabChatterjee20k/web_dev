const WebSocket = require("ws")
const yup = require('yup');

const wss = new WebSocket.Server({port:80})

/** collection for "yup" schemas for each event type
 * 
 * @type(object,<string , yup.Schema>)
 * 
 * */ 
const yupEventSchemas = {
    "PLAYER_MOVEMENT" : yup.object().shape({
        x:yup.number().required().integer(),
        y:yup.number().required().integer()
    })
}

function parse_message(msg){
    const object = JSON.parse(msg)

    if(!("event" in object)){
        throw new Error("Event not provided")
    }
    if(!("payload" in object)){
        throw new Error("Payload not provided")
    }

    object.payload = yupEventSchemas[object.event].validateSync(object.payload)
    return object
}

wss.on("connection", ws=>{
    console.log("New client")

    ws.on("message", message =>{
        let data;
        try {
            data = parse_message(message)
        } catch (error) {
            console.log("Invalid message",error.message)
            return;
        }

        console.log(data)
    })
    ws.on("close",()=>{
        console.log("client disconnected")
    })

})