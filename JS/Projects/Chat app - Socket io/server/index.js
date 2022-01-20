const io = require("socket.io")(8000)

const users = {};

io.on("connection", socket => {

    socket.on("new-user-joined", name => { //new-user-joined is our custom event. We will emit from client side.
        users[socket.id] = name
        console.log("New user:- " + name)
        socket.broadcast.emit("user-joined", name) // it will automatically other users the name of the user
    })

    // for sending a message to all other participant
    socket.on("send", message => {
        socket.broadcast.emit("receive", { message: message, name: users[socket.id] })
    })

    //for disconenction event
    socket.on("disconnect", message => {
        socket.broadcast.emit("chat_left", users[socket.id])
        delete users[socket.id];
    })
})