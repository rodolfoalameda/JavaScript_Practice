let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let contaPar = 0
let contaImpar = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        contaPar++
    } else {
        contaImpar++
    }
}

console.log(`Temos ${contaPar} numeros pares, e ${contaImpar} numeros impares.`)