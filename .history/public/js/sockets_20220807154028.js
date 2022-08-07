const socket = io();



socket.on('connect', () => {
     console.log('Conectado');


});

socket.on('disconnect', () => {
     console.log('Desconectado del servidor');

 
});

socket.emit('enviar-mensaje','Hola',(payload)=>{console.log(payload)})
