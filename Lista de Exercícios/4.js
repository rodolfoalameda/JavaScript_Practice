function divisao(num1, num2) {
    if (num2 === 0) {
        console.log('Tende ao infinito')
    } else {
        console.log('Resultado: ' + num1 / num2)
        console.log('Resto: ' + (num1 % num2))
    }

}

divisao(2, 8)
divisao(8, 7)
divisao(0, 8)
divisao(7, 0)