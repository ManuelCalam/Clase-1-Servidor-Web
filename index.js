const express = require('express')
const app = express()

app.use(express.json())

let Album = [
    {'id': 1, 'nombre': "Graduation"},
    {'id': 2, 'nombre': "DAMN."},
    {'id': 3, 'nombre': "Donda"},
    {'id': 4, 'nombre': "Rodeo"}


]

app.use(express.json());


app.listen('3000', function(){
    console.log('Servidor web escuchando en el puerto 3000')
})

app.get('/', function(req, res){
    res.send(Album)
})

app.post('/PostAlbum', (req, res) =>{
    let id = req.body.id 
    let nombre = req.body.nombre
    Album.push({id, nombre})
    res.send(Album)
})

app.patch('/PatchAlbum/:id', function(req, res){
    let newInfo = req.body
    let id_patch = req.params.id

    let infoActualizar = Album.find(Referencia => Referencia.id == id_patch)

    Object.assign(infoActualizar, newInfo)

    res.send(Album)
})

app.delete('/DeleteAlbum/:id', function(req, res){
    let id_delete = req.params.id
    let indexEliminar = Album.findIndex(Referencia => Referencia.id == id_delete)

    Album.splice(indexEliminar, 1)

    res.send(Album)
})


app.get('/Busqueda/:id', function(req, res){
    let idBusqueda = req.params.id
    let info = Album.find(Referencia => Referencia.id == idBusqueda)

    res.send(info)

})



