const numeros = [1, 2, 3, 4, 5, 6]

console.log(numeros.map(dobraNumero = numero => numero*2))

console.log(numeros.map(isPar = numero =>{
    if(numero % 2 === 0){
        return numero
    }
}))