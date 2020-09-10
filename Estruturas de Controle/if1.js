function aprovado(nota) {
    if (nota >= 7) {
        console.log('Aprovado com nota: ' + nota)
    }
}

aprovado(7)

function eVerdade(valor) {
    if (valor) {
        console.log('É verdade: ' + valor)
    }
}

eVerdade(true)
eVerdade(false)
eVerdade(0)
eVerdade(1)