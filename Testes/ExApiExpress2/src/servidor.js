const porta = 8080

const express = require('express')
const app = express()
const bd = require('./bd')
const bodyParcer = require('body-parser')
const { urlencoded } = require('body-parser')

app.use(urlencoded({extended: true}))

app.get('/familia', (req, res, next) => {
    res.send(bd.getTodaFamilia())
})

app.get('/familia/:id', (req, res, next) => {
    res.send(bd.getFamiliar(req.params.id))
})

app.post('/familia', (req, res, next)=>{
    const pessoa = bd.addFamiliar({
        nome: req.body.nome,
        idade: req.body.idade
    })
    res.send(pessoa)
})

app.put('/familia/:id', (req, res, next)=>{
    const pessoa = bd.addFamiliar({
        id: req.params.id,
        nome: req.body.nome,
        idade: req.body.idade
    })
    res.send(pessoa)
})

app.delete('/familia/:id', (req, res, next)=>{
    res.send(bd.deletarFamiliar(req.params.id))
})

app.listen(porta, () =>{
    console.log(`Conectada a porta ${porta}.`)
})