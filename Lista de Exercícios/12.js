function fatorial(num) {
    let resposta = 1
    for (let i = 1; i <= num; i++) {
        resposta *= i
    }
    return resposta
}

console.log(fatorial(3))