const soma = function(num1, num2) {
    return num1 + num2
}

console.log(soma(1, 1))

const imprime = function(a, b, operador = soma  ) {
    console.log(operador(a, b))
}

imprime(3, 2)