const url = "ws://localhost:9876"
const ws = new WebSocket(url)

const btn = document.getElementById("btn")
const message = document.getElementById("message")
const box = document.getElementById("msgbox")

btn.disabled = true
ws.onopen = ()=>{
    btn.disabled = false
}

btn.onclick = ()=>{
    let msg = message.value
    ws.send(msg)
}

ws.onmessage = data=>{
    box.innerHTML+=`<li>${data.data}</li>`
}