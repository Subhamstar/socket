var socket=io();

let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    socket.emit("from-client")
})

socket.on('from-server',()=>{
    console.log("Collected a new event from server");
    const div=document.createElement('div');
    div.innerText='New Event from server';
    // console.log(div); 
    document.body.appendChild(div);
})