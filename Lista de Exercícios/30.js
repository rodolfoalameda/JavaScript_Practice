let vetor = [1, 3, 9, 14, 9999, -1]
let maior = vetor[0]
let menor = vetor[0]

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i]
    } else if (vetor[i] < menor) {
        menor = vetor[i]
    }
}

console.log(`${maior} é o maior, ${menor} é o menor.`)