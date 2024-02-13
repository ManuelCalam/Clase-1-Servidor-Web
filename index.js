const express = require('express')
const app = express()
let Album = [
    {'id': 1, 'nombre': "Album 1"},
    {'id': 2, 'nombre': "Album 2"},
    {'id': 3, 'nombre': "Album 3"}

]

app.use(express.json());


app.listen('3000', function(){
    console.log('Servidor web escuchando en el puerto 3000')
})

app.get('/', function(req, res){
    res.send(Album)
})

app.post('/Album', function(req, res){
    let Nuevo = [{
        'id': 4, 'nombre': "Album 4"   }]
    Album.push(Nuevo)
    res.send('Usuario agregado')
})