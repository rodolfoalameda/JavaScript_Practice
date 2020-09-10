function encontreUmNumero(min, max) {
    let numero = Math.random() * (max - min) + min
    return Math.floor(numero)
}

let valor = 0

while(valor != -1) {
    valor = encontreUmNumero(-1, 10)
    console.log(`A opcão escolhida foi: ${valor}`)
}

