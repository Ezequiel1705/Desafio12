const express = require('express');

const { Server: HttpServer} = require('http')

const { Server: Socket } = require('socket.io')

const ContenedorMemoria = require('./contenedores/ContenedorMemoria.js')
const ContenedorArchivo = require('./contenedores/ContenedorArchivo.js')

//--------------------------------------------
// instancio servidor, socket y api

const app = express();
const httpServer = new HttpServer(app);
const io = new Socket(httpServer);

//--------------------------------------------
// configuro el socket

io.on('connection', async socket => {
    console.log('New Client connected');

    const productos = new ContenedorArchivo(this.ruta);
    let allProductos = await productos.listarAll();
    console.log(allProductos);
    socket.emit('productos', allProductos);

    socket.emit('mensajes', mensajes.listarAll())
    
    //productos
    //mensajes
});

//--------------------------------------------
// agrego middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//--------------------------------------------
// inicio el servidor

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))