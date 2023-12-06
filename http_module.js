const http = require ('http');

const server = http.createServer((request, response) => {
    response.end("Hola mundo desde el backend!!")
})

server.listen(8080,() => {
    console.log("Servidor escuchando en puerto 8080")
})
