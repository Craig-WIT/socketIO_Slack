// const userName = prompt("What is your username?");
// const password = prompt("What is your password?");

userName = "Craig";
password = "password";

const socket = io('http://localhost:8001');

const namespaceSockets = [];
const listeners = {
    nsChange: [],
}

const addListeners = (nsId)=>{
    if(!listeners.nsChange[nsId]){
    namespaceSockets[nsId].on('nsChange',(data)=>{
        console.log('Namespace Changed');
        console.log(data)
    })
    listeners.nsChange[nsId] = true;
}
}

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

        if(!namespaceSockets[ns.id]){
            namespaceSockets[ns.id] = io(`http://localhost:8001${ns.endpoint}`)
        }

        addListeners(ns.id)
 
    });

    Array.from(document.getElementsByClassName('namespace')).forEach(element =>{
        console.log(element);
        element.addEventListener('click',e=>{
            joinNs(element,nsData);
        });
    });

    joinNs(document.getElementsByClassName('namespace')[0],nsData)
});