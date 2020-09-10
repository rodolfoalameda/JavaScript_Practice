const porta = 8080

const express = require('express')
const app = express()
const bd = require('./bd')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/produtos', (req, res, next) => {
    res.send(bd.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bd.getProduto(req.params.id))

})

app.post('/produtos', (req, res, next) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Conectada ${porta}`)
})