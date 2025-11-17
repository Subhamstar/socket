var socket=io();

let btn=document.getElementById('btn');
let newmsg=document.getElementById('newmsg');
let msglist=document.getElementById('msglist');

btn.onclick=function exec(){
    socket.emit('msg_send',{
        msg:newmsg.value 
    })
}
socket.on("msg_rcvd",(data)=>{
    let limsg=document.createElement('li');
    limsg.innerText=data.msg;
    msglist.appendChild(limsg);
})



// btn.addEventListener('click',()=>{
//     socket.emit("from-client")
// })

// socket.on('from-server',()=>{
//     console.log("Collected a new event from server");
//     const div=document.createElement('div');
//     div.innerText='New Event from server';
//     // console.log(div); 
//     document.body.appendChild(div);
// })