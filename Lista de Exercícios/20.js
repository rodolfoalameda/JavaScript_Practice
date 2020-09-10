let montante = 18
let resto = 0

let nota100 = parseInt(montante / 100)
resto = montante % 100

let nota50 = parseInt(resto / 50)
resto = resto % 50

let nota20 = parseInt(resto / 20)
resto = resto % 20

let nota10 = parseInt(resto / 10)
resto = resto % 10

let nota5 = parseInt(resto / 5)
resto = resto % 5

let nota1 = parseInt(resto / 1)
resto = resto % 1

console.log(`${nota100} cedulas de 100`)
console.log(`${nota50} cedulas de 50`)
console.log(`${nota20} cedulas de 20`)
console.log(`${nota10} cedulas de 10`)
console.log(`${nota5} cedulas de 5`)
console.log(`${nota1} cedulas de 1`)
