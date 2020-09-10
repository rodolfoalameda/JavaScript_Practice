let nota = [7.0, 8.5, 6.8]
let codigoAluno = 001

function calculaMedia(codigoAluno, nota) {
    let media = 0
    nota.sort()

    media = (nota[2] * 4 + nota[1] * 3 + nota[0] * 3) / 10

    if (media < 4) {
        console.log(`Reprovado com media ${media.toFixed(2)}`)
    } else if (media >= 4 && media < 7) {
        console.log(`Aluno na final com media ${media.toFixed(2)}`)
    } else {
        console.log(`Aluno aprovado com media ${media.toFixed(2)}`)
    }

}

calculaMedia(codigoAluno, nota)