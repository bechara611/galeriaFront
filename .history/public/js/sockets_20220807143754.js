let socket=null;
const conectarSocket=async()=>{

    socket=io({});
   socket.on('connect',()=>{
       console.log('sockets online')
   })
   socket.on('disconnect',()=>{
       console.log('sockets offline')
   })
}

const main =async()=>{
    await conectarSocket;
}

main();

console.log('hola2')