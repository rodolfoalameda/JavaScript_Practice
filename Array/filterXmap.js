let familia = [{
        nome: 'eudo',
        idade: 57,
        sexo: 'm'
    },
    {
        nome: 'laura',
        idade: 53,
        sexo: 'f'
    },
    {
        nome: 'carol',
        idade: 30,
        sexo: 'f',
    },
    {
        nome: 'rodolfo',
        idade: 28,
        sexo: 'm'
    }
]

//exemplo para map e filter
//retorne  lista com as idade dobradas

const dobraIdade = pessoa => {
    return pessoa.idade *= 2
}

console.log(familia.map(dobraIdade))

//idade dobradas apenas para as mulheres

const dobraIdade2 = pessoa => {
    if(pessoa.sexo === 'f'){
        return pessoa.idade * 2
    }
}

console.log(familia.filter(dobraIdade2))