let place = document.getElementById("place")
const ws = new WebSocket("ws://localhost")
ws.addEventListener("open",()=>{
    place.innerText = "we are connected"
    let coordinates={
        x:200,
        y:300
    }
    ws.send(JSON.stringify(coordinates))  // if we dont stringify it then an object object data will be sent
    ws.send("skdfkdjf") // it will give error in server and so dont send plain string send json stringified object
})

ws.addEventListener("message",({data})=>{ 
    console.log(data)
    place.innerHTML += `<li>Hey msg from server:- ${data} </li>.`
})