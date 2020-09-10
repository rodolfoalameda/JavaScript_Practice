function jurosSimples(capitalInicial, taxa, tempo) {
    let resultado = capitalInicial * (1 + (taxa / 100)) * tempo
    template = `O montante final vale: R$: ${resultado}`

    console.log(template)
}

jurosSimples(10, 10, 1)

function jurosCompostos(capitalInicial, taxa, tempo) {
   var resultado = capitalInicial * Math.pow((1 + taxa/100), tempo)
   console.log('O montante acumulado vale: ' + resultado.toFixed(2))
}

jurosCompostos(10, 10, 3)