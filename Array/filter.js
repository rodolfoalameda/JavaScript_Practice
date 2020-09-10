const produtos = [{
        nome: 'notebook',
        preco: 3999,
        fragil: true
    },
    {
        nome: 'ipadPro',
        preco: 4199,
        fragil: true
    },
    {
        nome: 'copoPlastico',
        preco: 12.90,
        fragil: false
    }
]

const numeros = [1, 2, 3, 4, 5, 6]

//console.log(produtos)

// console.log(produtos.filter(function(produto){
//     return true
// }))

// console.log(produtos.filter(function(produto){
//     return false
// }))

//criacao de funcoes que podem ser passadas como callback por exemplo

const caro = produto => produto.preco > 500
const fragil = produto => produto.fragil === false

console.log(produtos.filter(caro))
console.log(produtos.filter(fragil))

function isPrimo(numero) {
    let divisores = 0
    for (let i = 0; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++
        }

    }
    return divisores === 2
}

console.log(numeros.filter(isPrimo))

//note que diferente do map, o filter retorna um novo array com apenas o necessario
//enquanto que o map retorna um novo array com resultado de todos os elementos testados