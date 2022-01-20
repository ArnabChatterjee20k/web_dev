// Create WebSocket connection.
const ws = new WebSocket("ws://localhost:9876")

// after the ws is ready
ws.onopen = ()=>{
    ws.onmessage = response => console.log(response.data)
}