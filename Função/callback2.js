const notas = [7.0, 8.5, 2.3, 4.5, 9.9]

function notasAbaixoDaMedia(notas) {
    let notasBaixas = []
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 7) {
            notasBaixas.push(notas[i])
        }
    }
    console.log(notasBaixas)
}

notasAbaixoDaMedia(notas)

let notasBaixas2 = notas.filter(function (notas) {
    return notas < 7
})

console.log(notasBaixas2)