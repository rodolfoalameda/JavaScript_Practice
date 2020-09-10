let desempenho = [10, 20, 20, 8, 25, 3, 0, 30, 1]

function desempenhoAtleta(desempenho) {
    let records = 0
    let piorJogo = 1
    let maior = desempenho[0]
    let menor = desempenho[0]

    for (let i = 1; i < desempenho.length; i++) {
        if (desempenho[i] > maior) {
            maior = desempenho[i]
            records++
        } else if (desempenho[i] < menor) {
            menor = desempenho[i]
            piorJogo = i + 1
        }
    }
    return `Melhor pontuação: ${maior}
Menor pontuação: ${menor}
Quebrou o record ${records} vezes
Sua pior pontuacao foi no jogo ${piorJogo}.`
}

console.log(desempenhoAtleta(desempenho))