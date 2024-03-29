const express = require('express');
const app = express();
const socketio = require('socket.io');

const namespaces = require('./data/namespaces');
const Room = require('./classes/Room');

app.use(express.static(__dirname + '/public'))

const expressServer = app.listen(8001);
const io = socketio(expressServer)

app.get('/change-ns',(req,res)=>{
    namespaces[0].addRoom(new Room(0,'Deleted Articles',0,false))
    io.of(namespaces[0].endpoint).emit('nsChange',namespaces[0])
    res.json(namespaces[0])
})

io.of("/").on('connection',(socket)=>{
    socket.emit('welcome',"Welcome to the Server");
    socket.on('clientConnect',()=>{
        console.log(socket.id,"has connected");
    })
    socket.emit('nsList',namespaces)
})

namespaces.forEach(namespace=>{
    io.of(namespace.endpoint).on('connection',(socket)=>{
        console.log(`${socket.id} has connected to ${namespace.endpoint}`)
    })
})