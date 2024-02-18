const userName = prompt("What is your username?");
const password = prompt("What is your password?");

const socket = io('http://localhost:8001');

socket.on('connect',()=>{
    console.log("Connected");
    socket.emit('clientConnect');
})

socket.on('nsList',(nsData)=>{
    console.log(nsData);
    const nameSpacesDiv = document.querySelector('.namespaces');
    nsData.forEach(ns => {
        nameSpacesDiv.innerHTML += `<div class="namespace" ns="${ns.name}"><img src="${ns.image}"></div>`
    });
});