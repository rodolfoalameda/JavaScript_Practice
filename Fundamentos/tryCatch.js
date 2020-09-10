function tratamento(e) {
    throw "Tem algo errado"
}

const pessoa = {
    nome: 'Rodolfo',
    idade: 28,
    peso: 71.8
}

function gritaNome(pessoa) {
    try {
        console.log(pessoa.nome.toUpperCase() + '!!!!')
    } catch (e) {
        tratamento(e)
    }
}

gritaNome(pessoa)