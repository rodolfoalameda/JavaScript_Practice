const sequencia = {
    id: 1,
    getId() {
        return this.id++
    }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequencia.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

module.exports = {salvarProduto, getProduto, getProdutos}