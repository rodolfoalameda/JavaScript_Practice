let numeros = [1, 2, 3, 4, 5, 6]

const resultado = numeros.map(function (n) {
    return n * 2
})

//console.log(resultado)

const resultado2 = numeros.map(function (n) {
    return n + 1
})

console.log(resultado2)

const triplo = n => n * 3
const metade = n => n / 2

let resultado3 = numeros.map(triplo).map(metade)
console.log(resultado3)

function isPrimo(numero) {
    let divisores = 0
    for (let i = 0; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++
        }

    }
    return divisores === 2
}

//console.log(isPrimo(3))

console.log(numeros.map(isPrimo))