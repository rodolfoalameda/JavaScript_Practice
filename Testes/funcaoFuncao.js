function soma(num1, num2) {
    return num1 + num2
}

function teste(num3, soma) {
    return soma + num3
}

console.log(teste(3, soma(1, 5)))