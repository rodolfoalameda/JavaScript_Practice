//importancia do contexto lexico

const saudacao = 'ola' //cl 1

function teste (){
   const saudacao = 'tudo bem?' //cl 2
   console.log(saudacao)
}

console.log(saudacao)
teste()

const cliente = { 
    nome: 'rodolfo', // cl 1
    idade:  28,
    peso: 71.8,
    endereco: {
        logradouro: 'hugo andrade', //cl 2
        numero: 220
    },
    sexo: 'm'
}

console.log(cliente)