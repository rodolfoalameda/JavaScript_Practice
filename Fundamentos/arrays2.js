// const lista = []

// const pessoa1 = {
//     nome: 'ana',
//     idade: 17
// }

// const pessoa2 = {
//     nome: 'creuza',
//     idade: 18
// }

// lista.push(pessoa1, pessoa2)


// for (let i = 0; i < lista.length; i++) {
//     if (lista[i].idade < 18) {
//         let index = lista.indexOf(lista[i])
//         lista.splice(index, 1)
//     }
// }

// console.log(lista)


const lista = []

const carro1 = {
    id: 1,
    nome: 'uno',
    preco: 1000
}

const carro2 = {
    id: 2,
    nome: 'gol',
    preco: 1000
}

lista.push(carro1, carro2)

for(let i = 0; i < lista.length; i ++){
    if(lista[i].id === 2){
        let novoValor = lista[i].preco * 0.85
        lista[i].preco = novoValor
    }
}
console.log(lista)