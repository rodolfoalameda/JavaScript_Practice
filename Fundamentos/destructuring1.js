const pessoa = {
    nome: 'rodolfo',
    idade: 28,
    peso: 71.8,
    endereco: {
        rua: 'hugo andrade',
        numero: 220
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {endereco:{rua, numero }} = pessoa
console.log(rua, numero)