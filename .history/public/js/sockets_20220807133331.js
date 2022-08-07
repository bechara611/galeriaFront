let socket=null;
const conectarSocket=async()=>{

    socket=io();
   socket.on('connect',()=>{
       console.log('sockets online')
   })
   socket.on('disconnect',()=>{
       console.log('sockets offline')
   })

   socket.on('recibir-mensajes',(payload)=>{
       //Pendiente
      
   })
   socket.on('usuarios-activos',(payload)=>{
       //pendiente
      
   })

   socket.on('mensaje-privado',(payload)=>{
       console.log(`privado: ${payload}`)
   })
}

const main=async()=>{
    await conectarSocket;
}
main();
socket= io();

