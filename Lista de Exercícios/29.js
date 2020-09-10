let vetor = [12, 15, 1, 99, 4, 6, 11, 13]
let contador = 0
let contador2 = 0

function percorreArray(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            contador++
        } else {
            contador2++
        }
    }
    console.log(`Existem ${contador} numeros no intervalo de 10 a 20 e ${contador2} numeros fora.`)
}

percorreArray(vetor)