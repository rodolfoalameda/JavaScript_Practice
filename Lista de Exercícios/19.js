function calculaPedido(codigo, quantidade) {
    switch (codigo) {
        case 100:
            return `${quantidade} numeros 100, valor: ${quantidade * 3}`
            break
        case 200:
            return `${quantidade} numeros 200, valor: ${quantidade * 4}`
            break
        case 300:
            return `${quantidade} numeros 300, valor: ${quantidade * 5.5}`
            break
        default:
            return 'Pedido invalido'

    }
}

console.log(calculaPedido(100, 5))
console.log(calculaPedido(999, 5))
