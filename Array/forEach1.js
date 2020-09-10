const jogadores = ['navas', 'ramos', 'kroos', 'modric', 'cr7']

jogadores.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

jogadores.forEach(nome => console.log(nome))

const exibirJogadores = function(nome){
    console.log(nome)
}

jogadores.forEach(exibirJogadores)

jogadores.forEach(nome => {
    console.log(nome.toUpperCase())
});

let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numero.forEach(n => {
    console.log(n)
});



