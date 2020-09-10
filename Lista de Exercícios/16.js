function calculadoraBasica(a, operador, b) {
    switch (operador) {
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        case '*':
            return a * b
            break
        case '/':
            return a / b
            break
        default:
            console.log('Operação incorreta')
    }
}

console.log(calculadoraBasica(3, '+', 5))
console.log(calculadoraBasica(3, '*', 5))
console.log(calculadoraBasica(3, '/', 5))
console.log(calculadoraBasica(3, '-', 5))