const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app=express();


const server=http.createServer(app);
const io=socketIo(server);

io.on('connection',(socket)=>{
    console.log("new client connected "+socket.id);





    socket.on('msg_send',(data)=>{
        console.log(data);
        io.emit('msg_rcvd',data);    // display to all including itself
        // socket.emit('msg_rcvd',data);     // only display its own message
        // socket.broadcast.emit('msg_rcvd',data);       // display to all except itself
    })

    // socket.on('from_client',()=>{
    //     console.log("Event coming from client")
    // })

    // setInterval(()=>{
    //     socket.emit('from-server',new Date())
    // },2000);
})

app.use('/',express.static(__dirname+'/public'));
server.listen(3000,()=>{
    console.log("server started on port 3000"); 
})