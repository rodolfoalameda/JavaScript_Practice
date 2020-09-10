// const notas = [7.5, 9.0, 5.5, 8.8]
// console.log(notas)
// console.log(notas[2])

// for (let i = 0; i < notas.length; i++) {
//     if (notas[i] > 8.9) {
//         console.log(notas[i]);
//     }
// }

// console.log(notas.length)

const lista = ['a', 'b', 'c', 'd']

for(let i = 0; i < lista.length; i++){
    if(lista[i] === 'c'){
        let index = lista.indexOf(lista[i])
        lista.splice(index, 1)
        console.log(lista)
    }
}

