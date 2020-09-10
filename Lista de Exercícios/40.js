let notas = [7.5, 2.8, 5.5, 9.3, 10]

function conceitoNotas(notas) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 5) {
            console.log('Conceito D')
        } else if (notas[i] >= 5 && notas[i] < 7) {
            console.log('Conceito C')
        } else if (notas[i] >= 7 && notas[i] < 9) {
            console.log('Conceito B')
        } else {
            console.log('Conceito A')
        }
    }

}

conceitoNotas(notas)