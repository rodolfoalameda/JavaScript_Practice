let numeros = [-1, -2, 5, 9]
let contador = 0
let auxiliar = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
        auxiliar.push(numeros[i])
        contador++
    }
}

console.log(`Existem ${contador} numeros menores que 0.`)
console.log('São eles: ' + auxiliar)