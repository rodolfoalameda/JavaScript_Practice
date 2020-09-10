function aumento(salario, plano) {
    switch(plano){
        case 'a':
            salario = salario * 1.1
            console.log(`Seu novo salario é de ${salario}`) 
            break
        case 'b':
            salario = salario * 1.15
            console.log(`Seu novo salario é de ${salario}`) 
            break
        case 'c':
            salario = salario * 1.2
            console.log(`Seu novo salario é de ${salario}`) 
            break
        default:
            console.log('Plano inexistente.')
    }
}

aumento(100, 'a')
aumento(100, 'b')
aumento(100, 'c')