let place = document.getElementById("place")
const ws = new WebSocket("ws://localhost")
ws.addEventListener("open",()=>{
    place.innerText = "we are connected"

    // sending messages
    ws.send("Hey hellow")
})

// listening and retriving messages from server

// ws.addEventListener("message",e=>{ //e is msg object which contains msg from server
//     console.log(e)
//     place.innerHTML= `<li>Hey msg from server:- ${e.data} </li>.`
// })

// using object destructoring
ws.addEventListener("message",({data})=>{ 
    console.log(data)
    place.innerHTML= `<li>Hey msg from server:- ${data} </li>.`
})