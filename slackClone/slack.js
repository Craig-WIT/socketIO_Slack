const express = require('express');
const app = express();
const socketio = require('socket.io');

const namespaces = require('./data/namespaces');

app.use(express.static(__dirname + '/public'))

const expressServer = app.listen(8001);
const io = socketio(expressServer)

io.on('connection',(socket)=>{
    socket.emit('welcome',"Welcome to the Server");
    socket.on('clientConnect',()=>{
        console.log(socket.id,"has connected");
    })
    socket.emit('nsList',namespaces)
})