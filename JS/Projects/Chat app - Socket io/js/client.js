const socket = io("http://localhost:8000")

const message_Input = document.getElementById("message_Input")
const container = document.querySelector(".container")
const btn = document.getElementById("btn")

btn.onclick = () => {
    const msg = message_Input.value
    append(`You : ${msg}`, "right")
    socket.emit("send", msg)
    message_Input.value = null
}

const append = (message, position) => {
    const message_Element = document.createElement("div")
    message_Element.innerText = message;
    message_Element.classList.add("message")
    message_Element.classList.add(position)
    container.append(message_Element)
}

const name = prompt("Enter name")
socket.emit("new-user-joined", name) // emitting to the custom evetnt made

//when new user joined
socket.on("user-joined", data => {
    append(`${data} joined the chat`, "right")
})

// reciving message
socket.on("receive", data => {
    append(`${data.name} : ${data.message}`, "left")
})

socket.on("chat_left", data => {
    append(`${data} left the chat`, "left")
})