function aprovaReprova(nota) {
    if (nota <= 37) {
        console.log(`Aluno reprovado com nota ${nota}.`)
    } else if (nota % 5 > 2) {
        nota = nota + (5 - (nota % 5))
        console.log(`Aprovado com nota ${nota}.`)
    } else {
        console.log(`Aprovado com nota ${nota}.`)
    }
}

aprovaReprova(38)
aprovaReprova(12)
aprovaReprova(97)