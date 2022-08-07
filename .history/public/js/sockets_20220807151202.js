const io= require('socket.io')
const sockets = io() //socket del cliente, el que este usando el cliente

sockets.on('connect', () => {
    console.log('conectado')
  
})
sockets.on('disconnect', () => {
    console.log('desconectado')

})