const contas = [{
        nome: 'rodolfo',
        saldo: 1250
    },
    {
        nome: 'eudo',
        saldo: 3000
    }
]

const resultado = contas.map(c => (c.saldo)).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return (acumulador + atual)
})

console.log(resultado)