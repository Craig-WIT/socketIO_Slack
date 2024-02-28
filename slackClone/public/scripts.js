// const userName = prompt("What is your username?");
// const password = prompt("What is your password?");

userName = "Craig";
password = "password";

const socket = io('http://localhost:8001');

socket.on('connect',()=>{
    console.log("Connected");
    socket.emit('clientConnect');
})

socket.on('nsList',(nsData)=>{
    console.log(nsData);
    const nameSpacesDiv = document.querySelector('.namespaces');
    nameSpacesDiv.innerHTML = "";
    nsData.forEach(ns => {
        nameSpacesDiv.innerHTML += `<div class="namespace" ns="${ns.endpoint}"><img src="${ns.image}"></div>`
        io(`http://localhost:8001${ns.endpoint}`)
    });

    Array.from(document.getElementsByClassName('namespace')).forEach(element =>{
        console.log(element);
        element.addEventListener('click',e=>{
            joinNs(element,nsData);
        });
    });

    joinNs(document.getElementsByClassName('namespace')[0],nsData)
});