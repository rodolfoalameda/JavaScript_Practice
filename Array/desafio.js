const alunos = [
    {nome: 'joao', bolsista: false},
    {nome: 'ana', bolsista: false},
    {nome: 'rodrigo', bolsista: false}
]

// Mostre para cada elemento

// const resposta = alunos.forEach(function(aluno, index){
//     console.log(`${index + 1} ${aluno.nome} ${aluno.bolsista}`)
// })

//Cancele todas as bolsas

// const resposta = alunos.map(function(aluno){
//     return aluno.bolsista = false
// })

// console.log(resposta)

//Mostre apenas bolsistas

// const resposta = alunos.filter(function(aluno){
//     return aluno.bolsista === true
// })

// console.log(resposta)

//Tem bolsistas nesta lista?

const resposta = alunos.map(a => a.bolsista).reduce(function(bolsa, aluno){
    if(bolsa || aluno){
        return true
    } else {
        return false
    }
})

console.log(resposta)


