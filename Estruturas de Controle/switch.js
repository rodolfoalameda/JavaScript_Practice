const carro = {
    nome: 'gol',
    cor: 'vermelho',
    valor: 0
}

switch (carro.cor) {
    case 'preto':
    case 'branco':
    case 'prata':
        carro.valor = 10000
        break
    default:
        carro.valor = 14000
}

console.log(carro)