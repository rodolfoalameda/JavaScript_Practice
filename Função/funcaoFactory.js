// function Pessoa(nome, sobrenome, idade, peso) {
//     return {
//         nome,
//         sobrenome,
//         idade,
//         peso,
//         falar(){
//             return `Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos e peso ${peso}`
//         }
//     }
// }

// const p1 = Pessoa('Rodolfo', 'Almeida', 28, 72)
// const p2 = Pessoa('Tati', 'Andrade', 23, 80)
// console.log(p1.falar())
// console.log(p2.falar())


function Pessoa(nome) {
    return {
        nome,
        falar() {
            return `Meu nome é ${nome}`
        }
    }
}

const p1 = Pessoa('Rodolfo')
console.log(p1)
console.log(p1.falar())
