let array = ['bmw', 'ferrari', 'porshe']

function imprime(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

array.forEach(imprime)

//callback, conceito aonde uma chamada de função dispara outra a partir do retorno