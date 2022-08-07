

 //socket del cliente, el que este usando el cliente
 const sockets = io();
sockets.on('connect', () => {
    console.log('Hola')
    console.log('conectado')
  
})
sockets.on('disconnect', () => {
    console.log('chao')
    console.log('desconectado')
 
})
