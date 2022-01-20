let place = document.getElementById("place")
const ws = new WebSocket("ws://localhost")

ws.addEventListener("open",()=>{
    place.innerText = "we are connected. We will send some player data"
    
    let coordinates = {
        event:"PLAYER_MOVEMENT",
        payload:{
            x:120,
            y:200
        }
    }
    ws.send(JSON.stringify(coordinates))

})

ws.addEventListener("message",({data})=>{ 
    console.log(data)
    place.innerHTML += `<li>Hey msg from server:- ${data} </li>.`
})