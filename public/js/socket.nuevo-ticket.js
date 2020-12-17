
// Comando para establecer la nueva conexion
var socket = io();

var  label = $('#lblNuevoTicket');

// on: escuchar sucesos
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', function(resp){
    label.text(resp.actual);
});

$('button').on('click', function(){
    // Enviar información
    socket.emit('siguienteTicket', null, function(siguienteTicket){
        label.text(siguienteTicket);
    });

});